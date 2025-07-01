## Implementing a single screen multi-view UI

```bash
for dir in rock-paper-scissors conference-ticket-generator rest-countries-api; do
  mkdir -p "$dir/assets" "$dir/components" "$dir/lib"
  touch "$dir/page.tsx"
done
```


<div className="w-full flex justify-end my-8">
      <div className="relative inline-block text-left">
        {/* Dropdown Button */}
        <button
          type="button"
          className="inline-flex justify-between items-center w-48 px-4 py-3 bg-white dark:bg-[#2B3945] border border-gray-300 dark:border-none rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-[#3c4a56] transition"
        >
          {selectedRegion || "Filter by Region"}
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>

        {/* Dropdown Items */}
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-[#2B3945] ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedRegion === region
                    ? "bg-gray-100 dark:bg-gray-700 font-semibold"
                    : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>