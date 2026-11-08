# הערות SEO — בודק עוקצים בית״ר

המאגר מתפרסם ב־GitHub Pages כאתר פרויקט: `https://bodekoktzim.github.io/Bodek1Oktzim/`. ההגדרה שנבדקה היא ענף `main`, תיקיית פרסום `/`, ללא דומיין מותאם. העמודים שנוספו נשארים תחת המאגר הזה בלבד.

## robots.txt — מגבלת GitHub Pages

לא נוצר `robots.txt` בנתיב הפרויקט, כדי לא ליצור קובץ שנראה תקף אך אינו משמש את הסורקים. קובץ כזה היה מוגש ב־`/Bodek1Oktzim/robots.txt`, ואילו Google דורשת את הקובץ בתיקייה העליונה של ה־host. בבדיקה מ־2026-11-08, הכתובת `https://bodekoktzim.github.io/robots.txt` וגם נתיב הפרויקט החזירו 404.

כרגע אין הוראת `robots.txt` שמגבילה סורקי חיפוש או AI. לכן אי אפשר להגדיר מתוך המאגר הזה הבחנה בין סורקי חיפוש לסורקי אימון. אם תרצה לפתור זאת בעתיד, אפשר לחבר דומיין מותאם שכבר בבעלותך, או להפעיל אתר Pages ברמת החשבון ב־`BodekOktzim.github.io`. האפשרות השנייה משפיעה על ה־host המשותף; יש לכתוב בה כללים שמוגבלים במדויק ל־`/Bodek1Oktzim/`. לא נעשה שינוי כזה, ולא נערך הפרויקט `maagarim-eg-el-fa`.

## מה נוסף ומה נותר ידני

נוסף עמוד הסבר סטטי אחד, שעוסק רק בבדיקת המספרים ובאופן השימוש במאגר. דף הבית מקשר אליו. שני העמודים כוללים canonical, תיאור חיפוש ותגיות שיתוף; נוספו נתוני `WebSite`, `WebPage` ו־`FAQPage` המתאימים לתוכן הגלוי. לא נוספו פרטי ארגון, בעלות או זיקה רשמית שלא אומתו.

נוספו `sitemap.xml` ו־`llms.txt` לנתיב הפרויקט. מפת האתר כוללת רק את דף הבדיקה ואת עמוד ההסבר; היא אינה כוללת מספרי טלפון, מידע מהמאגר או טופס דיווח. `llms.txt` הוא תוספת אופציונלית ולא תקן שמבטיח אינדוקס או הופעה במנועי AI, ולכן לא נוצר `llms-full.txt`.

אחרי פרסום, בעל החשבון יכול להוסיף ידנית את כתובת האתר כ־URL-prefix property ב־Google Search Console וב־Bing Webmaster Tools, לאמת בעלות ולהגיש את `https://bodekoktzim.github.io/Bodek1Oktzim/sitemap.xml`. ההתחברות והאימות דורשים את חשבון הבעלים. לא נדרשים שירותים בתשלום או מסירת סיסמה.

לא פורסמו תנאי שימוש או מדיניות פרטיות/תיקון/הסרה: כדי לנסח אותם באופן אמין צריך פרטי קשר ציבוריים, תקופת שמירת דיווחים, תיאור תהליך הטיפול בדיווחים ודרך מוסכמת לבקשת תיקון או הסרה. פרטים אלה לא נמסרו, ולכן לא הומצאה מדיניות.

## מקורות רשמיים

- [GitHub Pages — About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
- [Google — robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)
- [Google — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google — Sitemap overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [OpenAI — Overview of OpenAI crawlers](https://developers.openai.com/api/docs/bots)
