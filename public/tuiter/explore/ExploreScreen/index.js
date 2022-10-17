import PostSummaryList from "./PostSummaryList/index.js";

const Explore = () => {
    return(`
            <div class="row mb-2" style="font-size: 16px">
                <div class="col-10 position-relative">
                    <input class="float-start rounded-pill form-control ps-5" type="text" placeholder="Search Tuiter">
                    <i class="fa fa-search position-absolute wd-search-icon text-black"></i>

                </div>
                <div class="col-2 my-auto">
                    <a href="explore-settings.html" class="float-end">
                        <i class="fa fa-cog fa-lg"></i>
                    </a>
                </div>
            </div>
            
            <ul class="nav nav-tabs mb-2" style="font-size: 16px">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
                      <!-- tabs -->
                      
                      
            <div class="position-relative">
                <img src="../../images/spacex.jpg" class="img-fluid">
                <b class="position-absolute text-white wd-spacex-text" style="font-size: 26px">
                    SpaceX's Starship</b>
            </div>
           
           ${PostSummaryList()}
    `);
}
export default Explore;
