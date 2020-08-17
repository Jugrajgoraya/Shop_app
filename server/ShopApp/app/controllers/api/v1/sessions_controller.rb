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
end
