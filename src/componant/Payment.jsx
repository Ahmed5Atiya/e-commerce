const Payment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Choose Payment Type
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {["PayPal", "Apple Pay", "Google Pay", "Visa"].map(
            (payment, index) => (
              <button
                key={index}
                className={`border rounded-lg p-4 flex items-center justify-center h-16 focus:outline-none transition-colors duration-200 ${
                  payment === "Visa"
                    ? "border-blue-500 bg-blue-100 text-blue-800"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="text-sm font-medium">{payment}</span>
              </button>
            )
          )}
        </div>

        <form className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            New Debit or Credit Card
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              value="1234 5678 9101 1121"
              placeholder="1234 5678 9101 1121"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              value="John Doe"
              placeholder="John Doe"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              readOnly
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Exp. Date
              </label>
              <input
                type="text"
                value="12/24"
                placeholder="MM/YY"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <input
                type="text"
                value="123"
                placeholder="123"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                readOnly
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="saveCard"
              type="checkbox"
              checked={true}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              readOnly
            />
            <label
              htmlFor="saveCard"
              className="ml-2 block text-sm text-gray-900"
            >
              Save Card for Future Payments
            </label>
          </div>

          <button
            type="button"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Proceed Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
