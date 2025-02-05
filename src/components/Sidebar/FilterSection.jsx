const FilterSection = () => {
    return (
      <div className="hs-accordion-group px-6 mt-4">
        {/* Opportunity Type Filter */}
        <div className="hs-accordion active" id="opportunity-type">
          <button className="hs-accordion-toggle group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <svg className="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Opportunity Type
          </button>
          <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
            <div className="pb-4 space-y-2">
              <div className="flex items-center">
                <input type="radio" name="opportunity" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" id="internship" />
                <label htmlFor="internship" className="text-sm text-gray-500 ms-2 dark:text-gray-400">
                  Internships
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="opportunity" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" id="coop" />
                <label htmlFor="coop" className="text-sm text-gray-500 ms-2 dark:text-gray-400">
                  Co-op Programs
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="opportunity" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" id="research" />
                <label htmlFor="research" className="text-sm text-gray-500 ms-2 dark:text-gray-400">
                  Research Positions
                </label>
              </div>
            </div>
          </div>
        </div>
  
        {/* Location Filter */}
        <div className="hs-accordion" id="location">
          {/* Similar structure to opportunity type */}
        </div>
  
        {/* Sector Filter */}
        <div className="hs-accordion" id="sector">
          {/* Similar structure to opportunity type */}
        </div>
      </div>
    );
  };
  
  export default FilterSection;