class Api::V1::ProductsController < ApplicationController

    require 'tempfile'

    def index
        products = Product.order(created_at: :desc)
        render(json: products, each_serializer: ProductSerializer )
    end

    def show
        product = Product.find(params[:id])
        render json: product
    end

    def create
        file = Tempfile.new('temp');
        product = Product.new params.require(:product).permit(:name, :description, :price, :weight, :stock, :image)
        file.write(params[:image])
        product.image.attach(io: file, filename: 'temp.jpeg', content_type: 'image/jpeg')
        file.rewind
        
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

    def update
        product = Product.find(params[:id])
        if product.update(params.require(:product).permit(:name, :description, :price, :weight, :stock, :image))
          render json: product
        else
          render :errors
        end
    end
end
