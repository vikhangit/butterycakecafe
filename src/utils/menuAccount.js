import { FaHeart, FaRegUser, FaShippingFast } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { GiMedicines, GiSevenPointedStar } from "react-icons/gi";
import { IoIosGift } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { RiBillFill } from "react-icons/ri";
import { TbShieldLockFilled } from "react-icons/tb";

export const menuAccount = [
    {
        title: "Thông tin cá nhân",
        icon: <FaRegUser size={20} />,
        link: "informations"
    },
    {
        title: "Đổi mật khẩu",
        icon: <TbShieldLockFilled size={20} />,
        link: "change-password"
    },
    {
        title: "Lịch sử mua hàng",
        icon: <RiBillFill size={20} />,
        link: "purchase-history"
    },

    {
        title: "Sản phẩm quan tâm",
        icon: <FaHeart size={20} />,
        link: "favourites"
    },
    {
        title: "Điểm tích lũy",
        icon:  <GiSevenPointedStar size={20} />,
        link: "points"
    },
    {
        title: "Sản phẩm đã xem",
        icon: <GiMedicines size={20} />,
        link: "product-view"
    },
    {
        title: "Mã giảm giá của tôi",
        icon: <IoIosGift size={20} />,
        link: "my-voucher"
    },
    {
        title: "Đặt hàng số lượng lớn",
        icon: <FaShippingFast size={20} />,
        link: "quick-order"
    },
    {
        title: "Thống kê",
        icon: <FaChartColumn size={20} />,
        link: "statistical"
    },
    {
        title: "Đăng xuất",
        icon: <IoLogOut size={20} /> ,
    },

]