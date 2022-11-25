<template>
    <!-- ========== Left Sidebar Start ========== -->
    <div class="left-side-menu">
        <div class="slimscroll-menu">
            <!-- User box -->
            <div class="user-box text-center">
                <img src="@/static/images/users/user-4.jpg" alt="تصویر کاربر" title="قائم امیدی"
                    class="rounded-circle img-thumbnail avatar-lg">
                <div class="dropdown">
                    <a href="#" class="text-dark dropdown-toggle h5 mt-2 mb-1 d-block" data-toggle="dropdown">قائم
                        امیدی</a>
                    <div class="dropdown-menu user-pro-dropdown">

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="fe-user mr-1"></i>
                            <span>حساب کاربری</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="fe-settings mr-1"></i>
                            <span>تنظیمات</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="fe-lock mr-1"></i>
                            <span>قفل کردن صفحه</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="fe-log-out mr-1"></i>
                            <span>خروج</span>
                        </a>

                    </div>
                </div>
                <p class="text-muted">مدیر</p>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="text-muted">
                            <i class="mdi mdi-settings"></i>
                        </a>
                    </li>

                    <li class="list-inline-item">
                        <a href="#" class="text-custom">
                            <i class="mdi mdi-power"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <ul class="metismenu" id="side-menu">
                    <li>
                        <router-link to="/dashboard">
                            <i class="mdi mdi-view-dashboard"></i>
                            <span> پیشخوان </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/yuan_price">
                            <i class="mdi mdi-coin"></i>
                            <span> لیست قیمت یوان چین </span>
                        </router-link>
                    </li>
                    <!--<li>-->
                    <!--<a href="#">-->
                    <!--<i class="mdi mdi-robot"></i>-->
                    <!--<span> خزنده </span>-->
                    <!--<span class="menu-arrow"></span>-->
                    <!--</a>-->
                    <!--<ul class="nav-second-level" aria-expanded="false">-->
                    <!--<li><router-link to="/dashboard/crawler/linked_products">محصولات لینکی</router-link></li>-->
                    <!--<li><router-link to="/dashboard/crawler/free_products">محصولات آزاد</router-link></li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <li>
                        <a href="#">
                            <i class="mdi mdi-package"></i>
                            <span> محصولات </span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" aria-expanded="false">
                            <li>
                                <router-link to="/dashboard/products/list">لیست محصولات</router-link>
                            </li>
                            <li>
                                <router-link to="/dashboard/products/add">ایجاد محصول جدید</router-link>
                            </li>
                            <li>
                                <router-link to="/dashboard/categories/list">دسته بندی</router-link>
                            </li>
                            <li>
                                <router-link to="/dashboard/categories/add">ایجاد دسته بندی جدید</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="mdi mdi-web"></i>
                            <span> سایت </span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" aria-expanded="false">
                            <li>
                                <router-link to="/dashboard/sites">لیست سایت ها</router-link>
                            </li>
                            <li>
                                <router-link to="/dashboard/sites/add">اضافه کردن سایت</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/dashboard/user_reports">
                            <i class="mdi mdi-clipboard-text-outline"></i>
                            <span> گزارش کاربران </span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- End Sidebar -->
            <div class="clearfix"></div>
        </div>
        <!-- Sidebar -left -->
    </div>
    <!-- Left Sidebar End -->
</template>



