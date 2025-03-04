import { GeneralLayout } from "@/shared/feature-general-layout"
import { RecommendedWines } from "@/wine/feature-recommended-wines"
import { SearchBar } from "@/wine/feature-search-bar"
import { WineFilter } from "@/wine/feature-wine-filter"
import { WineList } from "@/wine/feature-wine-list"
import { WineRegistration } from "@/wine/feature-wine-registration"
import { WinesLayout } from "@/wine/ui-layout"

const WinesPage = () => {

  return (
    <GeneralLayout>
      <WinesLayout
        recommendedWines={<RecommendedWines />}
        searchBar={<SearchBar />}
        wineFilter={<WineFilter />}
        wineList={<WineList />}
        wineRegistration={<WineRegistration />}
      />
    </GeneralLayout>
  );
}

export default WinesPage;
