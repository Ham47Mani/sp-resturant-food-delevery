
const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-1">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-primary-color bg-opacity-20">
            <td className="hidden md:block py-3 px-2">1237861238721</td>
            <td className="py-3 px-2">19.07.2023</td>
            <td className="py-3 px-2">89.90</td>
            <td className="hidden md:block py-3 px-2">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-3 px-2">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-3 px-2">1237861238721</td>
            <td className="py-3 px-2">19.07.2023</td>
            <td className="py-3 px-2">89.90</td>
            <td className="hidden md:block py-3 px-2">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-3 px-2 text-green-700">Delivery</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-3 px-2">1237861238721</td>
            <td className="py-3 px-2">19.07.2023</td>
            <td className="py-3 px-2">89.90</td>
            <td className="hidden md:block py-3 px-2">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-3 px-2 text-green-700">Delivery</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-3 px-2">1237861238721</td>
            <td className="py-3 px-2">19.07.2023</td>
            <td className="py-3 px-2">89.90</td>
            <td className="hidden md:block py-3 px-2">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-3 px-2 text-green-700">Delivery</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-3 px-2">1237861238721</td>
            <td className="py-3 px-2">19.07.2023</td>
            <td className="py-3 px-2">89.90</td>
            <td className="hidden md:block py-3 px-2">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-3 px-2 text-green-700">Delivery</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-3 px-2">1237861238721</td>
            <td className="py-3 px-2">19.07.2023</td>
            <td className="py-3 px-2">89.90</td>
            <td className="hidden md:block py-3 px-2">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-3 px-2 text-green-700">Delivery</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-3 px-2">1237861238721</td>
            <td className="py-3 px-2">19.07.2023</td>
            <td className="py-3 px-2">89.90</td>
            <td className="hidden md:block py-3 px-2">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-3 px-2 text-green-700">Delivery</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage;