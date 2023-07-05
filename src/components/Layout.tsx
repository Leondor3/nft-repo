import { Banner } from "./Banner";
import { CallNFT } from "./CallNft";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HotColletions } from "./HotColletions";
import { Steps } from "./StepsNft";
import { TopCreated } from "./TopCreated";
import { TrendingCategory } from "./TrendingCategory";

export function Layout() {
    return (
        <>
            <Header />
            <Banner />
            <Steps />
            <HotColletions />
            <TopCreated />
            <TrendingCategory />
            <CallNFT />
            <Footer />
        </>
    )
}