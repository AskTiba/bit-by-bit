import React from "react";

const Finishing = () => {
  return (
    <main className="flex-1 w-full">
      <div className="w-full p-6 flex flex-col items-center justify-center gap-6">
        <div className="w-full">
          <h2 className="text-xl font-semibold">Finishing up</h2>
          <p className="text-sm text-gray-600">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <section className="w-full text-[13px] flex flex-col gap-2 bg-gray-100 border rounded p-4">
          <div>
            <section>
              <div className="flex justify-between">
                <h3 className="font-medium">Service Plan</h3>
                <h3 className="text-blue-500">$12/mo</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-600">Add-on 1</h3>
                <h3>$2/mo</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-600">Add-on 2</h3>
                <h3>$1/mo</h3>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Finishing;
