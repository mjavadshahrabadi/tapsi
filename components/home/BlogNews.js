import NewsItems from "./NewsItems";
// --------------

const BlogNews = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20 px-6 xl:px-0 mb-20">
      <h2 className="text-3xl font-bold">تازه‌ترین‌های وبلاگ تپسی</h2>
      <ul className="pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NewsItems
          image="https://blog.tapsi.ir/wp-content/uploads/2022/03/A68CB9F1-AA36-4B75-99B7-DE475A5FFBDF.jpeg"
          title="تخفیف ویژه دیجی‌کالا جت برای کاربران تپسی"
          description="سوپرمارکت آنلاین «دیجی‌کالا جت» با ارسال سریع محصولات سوپرمارکتی شروع به کار کرده است و سفارش‌های آنلاین سوپرمارکتی را از فروشگاه‌های زنجیره‌ای معتبر و یا فروشگاه‌های منتخب شهرهای تهران، کرج، اصفهان، قم و مشهد تامین می‌کند. این مجموعه برای شما کاربران تپسی تخفیف ویژه‌ای درنظر گرفته است و با استفاده از کد زیر می‌توانید برای […]"
        />
        <NewsItems
          image="https://blog.tapsi.ir/wp-content/uploads/2022/03/blog2-scaled.jpg"
          title="برای دریافت دز سوم واکسن، با تخفیف به مراکز واکسیناسیون بروید!"
          description="تپسی با همراهی شرکت سیناژن (تولیدکننده واکسن اسپایکوژن) برای رفتن به مراکز واکسیناسیون و تزریق دز سوم، تخفیف ویژه برایتان درنظر گرفته است. دیگر چیزی به نوروز باقی نمانده و این روزهای پایانی سال همه ما در تکاپو هستیم تا کارهای ناتمام را تمام کنیم و تعطیلات سال نو را با خاطری آسوده در کنار […]"
        />
        <NewsItems
          image="https://blog.tapsi.ir/wp-content/uploads/2022/02/baner-blog-alodegi-hava-tehran-copy.jpg"
          title="دلایل آلودگی هوای تهران و راهکارهای پیشگیری از آن"
          description="با توجه به روند افزایش جمعیت و صنعتی شدن بسیاری از شهرها، آلودگی هوا به یکی از بزرگ‌ترین معضلات زیست‌ محیطی تبدیل شده است. آلودگی هوای تهران نسبت به سایر نقاط کشور بیشتر است و علت اصلی این امر، تعداد زیاد ماشین‌ها و مصرف سوخت‌های هیدروکربنی بنزین و گازوئیل است که آلاینده‌های بسیاری را تولید […]"
        />
      </ul>
    </section>
  );
};

export default BlogNews;
