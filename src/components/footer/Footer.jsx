import './footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            {/* Footer Top */}
            <div className="footer-top">
                <div className="footer-top-title">متواجدين لمساعدتكم</div>
                <div className="footer-top-email">
                    <span className="footer-top-text">تواصل معانا عبر الايميل</span>
                    <span className="footer-top-email-address">
                        <i class="bi bi-envelope"></i>
                        elshamy@gmail.com 
                    </span>
                </div>
            </div>

            {/* Footer Middle */}
            <div className="footer-items-wrapper">
                <div className="footer-item">
                    <h4 className="footer-item-title">الالكترونيات</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">الكاميرات و تسجيل الفيديو</li>
                        <li className="footer-item-link">الاجهزة المنزلية</li>
                        <li className="footer-item-link">الهواتف</li>
                        <li className="footer-item-link">سماعات الرأس</li>
                        <li className="footer-item-link">التلفزيونات</li>
                        <li className="footer-item-link">اجهزة التابليت</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">الازياء</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">الكاميرات و تسجيل الفيديو</li>
                        <li className="footer-item-link">رجالية</li>
                        <li className="footer-item-link">نسائية</li>
                        <li className="footer-item-link">نظرات</li>
                        <li className="footer-item-link">الساعات</li>
                        <li className="footer-item-link">المجوهرات</li>

                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">ادوات التجميل</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">العطور</li>
                        <li className="footer-item-link">المكياج</li>
                        <li className="footer-item-link">العناية بالبشرة</li>
                        <li className="footer-item-link">منتجات الرعاية</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <i class="bi bi-c-circle-fill"></i>
                2022 كل الحقوق محفوظة
            </div>
        </footer>
    )
}

export default Footer;