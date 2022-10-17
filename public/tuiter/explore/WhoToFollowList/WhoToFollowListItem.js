const WhoToFollowListItem = (who) =>{
    return(`
        <div class="list-group-item" >
            <div class="row">
                <div class="col-2 my-auto">
                    <img class="rounded-circle w-100" src=${who.avatarIcon}>
                </div>
                <div class="col-6 my-auto">
                    <div class="text-nowrap">
                        <b>${who.userName}</b>
                        <span class="fa-stack wd-check-mark" style="font-size: 6px">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-4 my-auto">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;