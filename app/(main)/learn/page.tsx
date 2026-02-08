import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () => {
    return ( 
        <div className="flex flex-row-reverse gap-12 px-6">
            <StickyWrapper>
                <UserProgress activeCourse={{ title: "Japanese", imageSrc: "/jp.svg"}} correct={0} fail={0} stars={0}/>
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Japanese"></Header>
                <div className="space-y-4">
                </div>
            </FeedWrapper>
        </div>
    );
}
 
export default LearnPage;