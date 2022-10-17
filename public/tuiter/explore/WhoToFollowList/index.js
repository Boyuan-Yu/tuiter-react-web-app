import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {

    return (`
               <ul class="list-group" style="font-size: 16px">
               <b class="list-group-item">Who to follow</b>
               ${
                    who.map(who =>{
                        return(WhoToFollowListItem(who));
                        }).join('')
                }
               </ul>

            `);
}
export default WhoToFollowList;