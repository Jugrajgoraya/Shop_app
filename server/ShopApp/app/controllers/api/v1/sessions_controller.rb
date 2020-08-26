class Api::V1::SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: { id: user.id }
        else
          render json: { message: "you failed to log in" }, status: 404
        end
      end
    
      def destroy
        session[:user_id] = null;
      end

      def createCart
        if session[:cart_items] == nil 
          session[:cart_items] = []
        else
          cart_items = session[:cart_items]
          cart_items << params[:id]
          session[:cart_items] = cart_items
        end
        products = Product.where(id: cart_items)

        render json: products
      end

      def index
        cart_items = session[:cart_items]
        products = Product.where(id: cart_items)
        render json: products 
      end

      def updateCart
        cart_items = session[:cart_items]
        cart_items = cart_items.filter {|item| item != params[:id]}
        session[:cart_items] = cart_items

        products = Product.where(id: cart_items)
        render json: products
      end

end
