class Api::V1::ProductsController < ApplicationController
    def index
        products = Product.order(created_at: :desc)
        render json: products
    end

    def show
        product = Product.find(params[:id])
        render json: product
    end

    def create
        product = Product.new params.require(:product).permit(:name, :description, :price, :weight, :stock, :image)

        if product.save
            render(json: { id: product.id })
          else
            render(
              json: { errors: product.errors },
              status: 422 
            )
          end
    end

    def destroy
        id = params[:id]
        product = Product.find(id)
        if product.destroy
            render(json: {message: `#{product.name} with #{product.id} id has been deleted`})
        else
            render(
                json: {errors: product.errors, message: `#{product.name} with #{product.id} id could not be deleted`},
                status: 422
            )
        end
    end

    def edit
        id = params[:id]
        product = Product.find(id)
        render json: product
    end

    def update
        id = params[:id]
        product = Product.find(id)
        if product.update(params.require(:product).permit(:name, :description, :price, :weight, :stock, :image))
          render json: product
        else
          render :edit
        end
    end
end
