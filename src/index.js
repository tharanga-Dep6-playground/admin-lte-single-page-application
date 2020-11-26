
// import '../node_modules/admin-lte/plugins/jquery/jquery.min.js';
// import '../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js';
import '../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';

import dashboard from './dashboard/dashboard.html';
import addCustomer from './addCustomer/addCustomer.html';
import addItem from './addItem/addItem.html';
import allCustomer from './allCustomer/allCustomer.html';
import allItem from './allItem/allItem.html';
import customerDetail from './customerDetail/customerDetail.html';
import invoice from './invoice/invoice.html';
import itemDetail from './itemDetail/itemDetail.html';
import user from './user/userSetting.html';

$("#container").append(dashboard,addCustomer,addItem,allCustomer,allItem,customerDetail,invoice,itemDetail,user);


import './js/navigation.js';
import './sass/style.scss'