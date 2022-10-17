const PostItem = (post) =>{
    return(`
        <div class="wd-left-padding wd-top-padding">
            <div class="wd-pos-relative">
                <img class="wd-img-avatar" src=${post.avatar}>
            </div>
            <div class="wd-pos-relative-nudge-left">
                <div class="wd-bot-padding">
                    <div class="wd-bot-padding">
                        <span class="wd-fg-color-white wd-font-content">${post.userName}</span>
                        <span class="wd-fg-color-gray wd-font-content ">${post.userID} - ${post.date}</span>
                        </br>
                    </div>
                    <span class="wd-fg-color-white wd-font-content wd-max-width-content"> ${post.topic}</span>
                </div>
                <div class="wd-img-text-border wd-max-width-content wd-bot-margin">
                    <div class="wd-border-bot wd-bot-margin">
                        <img src=${post.image} width="504px" height="264px" class="wd-img-round-top-corner">
                    </div>
        
                    <div class="wd-left-padding">
                    <span class="wd-fg-color-white wd-font-content wd-max-width-content">${post.title}</span>
                        </br>
                        <span class="wd-fg-color-gray wd-font-content wd-max-width-content">${post.content}                 </br>
                    </div>
                </div>
        
                <div>
                    <ul class="wd-icons-list">
                        <li><a href="#" class="wd-fg-color-gray wd-link-no-underline"><i class='far fa-comment-alt'></i>
                            <span class="wd-left-padding">${post.commentNum}</span></a></li>
                        <li><a href="#" class="wd-fg-color-gray wd-link-no-underline"><i class="fa fa-retweet"></i>
                            <span class="wd-left-padding">${post.shareNum}</span></a></li>
                        <li><a href="#" class="wd-fg-color-red wd-link-no-underline"><i class="fa fa-heart"></i>
                            <span class="wd-left-padding">${post.likesNum}</span></a></li>
                        <li><a href="#" class="wd-fg-color-gray wd-link-no-underline"><i class="fa fa-upload"></i></a></li>
                    </ul>
                </div>
        
            </div>
        </div>
        <div class="wd-border-bot"></div>
    `)
}
export default PostItem;