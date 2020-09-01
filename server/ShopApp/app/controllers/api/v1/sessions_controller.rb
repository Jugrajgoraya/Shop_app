class Api::V1::SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json:  user 
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
        end
          cart_items = session[:cart_items]
          temp = Hash.new
          temp["id"] = params[:id]
          temp["quantity"] = params[:quantity]
          cart_items << temp
          session[:cart_items] = cart_items

          cart_ids = cart_items.map{ |obj| obj = obj["id"]}
          products = Product.where(id: cart_ids)

          product_with_quantities = []

          products.map do |product|
            cart_items.each do |cI| 
              if product[:id] == cI["id"]
                temp2 = {}
                temp2["id"] = product[:id]
                temp2["quantity"] = cI["quantity"]
                temp2["name"] = product[:name]
                temp2["description"] = product[:description]
                temp2["image"] = url_for(product.image)
                temp2["price"] = product[:price]
                temp2["weight"] = product[:weight]

                product_with_quantities << temp2
              end
            end
          end
        render json: product_with_quantities
      end

      def index
        cart_items = session[:cart_items]
        if cart_items 
          cart_ids = cart_items.map{ |obj| obj = obj["id"]}
        
          products = Product.where(id: cart_ids)
          product_with_quantities = []

          products.map do |product|
            cart_items.each do |cI| 
              if product[:id] == cI["id"]
                temp2 = {}
                temp2["id"] = product[:id]
                temp2["quantity"] = cI["quantity"]
                temp2["name"] = product[:name]
                temp2["description"] = product[:description]
                temp2["image"] = url_for(product.image)
                temp2["price"] = product[:price]
                temp2["weight"] = product[:weight]
                
                product_with_quantities << temp2
              end
            end
          end
          render json: product_with_quantities
        else
          render json: :errors
        end
      end

      def updateCart
        cart_items = session[:cart_items]
        cart_items = cart_items.filter {|item| item["id"] != params[:id]}
        session[:cart_items] = cart_items

        cart_ids = cart_items.map{ |obj| obj = obj["id"]}
        products = Product.where(id: cart_ids)
        product_with_quantities = []

        products.map do |product|
          cart_items.each do |cI| 
            if product[:id] == cI["id"]
              temp2 = {}
              temp2["id"] = product[:id]
              temp2["quantity"] = cI["quantity"]
              temp2["name"] = product[:name]
              temp2["description"] = product[:description]
              temp2["image"] = url_for(product.image)
              temp2["price"] = product[:price]
              temp2["weight"] = product[:weight]
              
              product_with_quantities << temp2
            end
          end
        end
        render json:  product_with_quantities
      end

end
