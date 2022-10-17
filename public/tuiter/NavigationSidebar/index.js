const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/tuiter-react-web-app/public">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item ${active === 'home'? 'active':''}" href="../HomeScreen/index.html">
       <i class="fa fa-home"></i> 
       <span class="d-xl-inline d-none">Home</span>
     </a>
     <a class="list-group-item ${active === 'explore'? 'active':''}" href="../explore/index.html">
       <i class="fa fa-hashtag"></i> 
       <span class="d-xl-inline d-none">Explore</span>
     </a>
     <a class="list-group-item" href="#">
       <i class="fa fa-bell"></i> 
       <span class="d-xl-inline d-none">Notifications</span>
     </a>
     <a class="list-group-item" href="#">
       <i class="fa fa-envelope"></i> 
       <span class="d-xl-inline d-none">Messages</span>
     </a>
     <a class="list-group-item" href="#">
       <i class="fa fa-bookmark"></i> 
       <span class="d-xl-inline d-none">Bookmarks</span>
     </a>
     <a class="list-group-item" href="#">
       <i class="fa fa-list"></i> 
       <span class="d-xl-inline d-none">Lists</span>
     </a>
     <a class="list-group-item" href="#">
       <i class="fa fa-user"></i> 
       <span class="d-xl-inline d-none">Profile</span>
     </a>
     <a class="list-group-item" href="#">
       <i class="fa fa-circle"></i> 
       <span class="d-xl-inline d-none">More</span>
     </a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;