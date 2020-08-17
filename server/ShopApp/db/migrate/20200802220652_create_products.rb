class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.float :weight
      t.text :description
      t.string :category
      t.integer :stock

      t.timestamps
    end
  end
end
