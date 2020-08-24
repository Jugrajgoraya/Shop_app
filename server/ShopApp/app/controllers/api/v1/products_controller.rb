class Api::V1::ProductsController < ApplicationController

    def index
        products = Product.order(created_at: :desc)
        render(json: products, each_serializer: ProductSerializer )
    end

    def show
        product = Product.find(params[:id])
        render( json: product, each_serializer: ProductSerializer)
    end

    def create
        product = Product.new params.permit(:name, :description, :price, :weight, :stock, :image)
        
        if product.save
            render( json: product, each_serializer: ProductSerializer)
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
            render(json: {message: "your product has been deleted"})
        else
            render(
                json: {errors: product.errors, message: "your product could not be deleted"},
                status: 422
            )
        end
    end

    def update
        product = Product.find(params[:id])
        if product.update(params.permit(:name, :description, :price, :weight, :stock, :image))

            render( json: product, each_serializer: ProductSerializer)
        else
          render :errors
        end
    end
end
