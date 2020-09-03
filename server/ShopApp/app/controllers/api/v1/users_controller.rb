class Api::V1::UsersController < ApplicationController
    def create
        user = User.new params.require(:user).permit(:name, :email, :password, :billing_address, :default_shipping_address, :phone)

        if user.save
            render(json: { id: user.id })
          else
            render(
              json: { errors: user.errors },
              status: 422 
            )
          end
    end

    def destroy
        id = params[:id]
        user = User.find(id)
        if user.destroy
            render(json: {message: `#{user.name} with #{user.id} id has been deleted`})
        else
            render(
                json: {errors: user.errors, message: `#{user.name} with #{user.id} id could not be deleted`},
                status: 422
            )
        end
    end

    def edit
        id = params[:id]
        user = User.find(id)
        render json: user
    end

    def update
        id = params[:id]
        user = User.find(id)
        if user.update(params.require(:user).permit(:name, :email, :password, :billing_address, :default_shipping_address, :phone))
          render json: user
        else
          render :edit
        end
    end
end
