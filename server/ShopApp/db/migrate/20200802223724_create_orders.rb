class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.references :user, foreign_key: true
      t.text :shipping_address
      t.string :email
      t.string :status

      t.timestamps
    end
  end
end
