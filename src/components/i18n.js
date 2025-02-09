import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navOffers: "Offers",
      navContact: "Contact",
      welcome: "Customs Brokerage Services",
      desc: "Take advantage of the customs broker's services",
      aboutTitle: "Customs Brokerage Services",
      aboutText: "Customs-clearance of export and/or import goods requires certain knowledge, time, and human resources. To simplify the work and minimize risks, use the services of expert brokers who will save time and be your representatives in the customs terminal.",
      servicesTitle: "What Does Customs Brokerage Service Involve?",
      service1: "Customs procedures",
      service2: "Expertise",
      service3: "Obtaining a Phytosanitary Certificate",
      service4: "Obtaining a Origin Certificate",
      service5: "Taking other customs documents",
      offersTitle: "Customs Brokerage Price",
      column1: "Name",
      column2: "Customs Corridor",
      column3: "Price",
      table1: "Advance declaration",
      table2: "Customs Procedure (Exp/Imp)",
      table3: "Expertise",
      table4: "Complex declaration (more than 15 commodity codes)",
      table5: "Phytosanitary certificate",
      table6: "Origin certificate",
      green: "Green",
      red: "Red",
      yellow: "Yellow",
      any: "Any of them",
      warning: "* Prices are determined per one customs declaration, the price does not include customs fees and other government taxes.",
      input1: "Company Name",
      input2: "Your Name",
      input3: "Your Email",
      input4: "Your Number",
      input5: "Type Of Cargo",
      input6: "Route",
      input7: "What service do you want",
      send: "Send Message",
      contactTitle: "Tell us what you need",
      status: "Request sent succesfully",
      error: "Failed to send the message. Please try again."
    },
  },
  ge: {
    translation: {
      navHome: "მთავარი",
      navAbout: "ჩვენს შესახებ",
      navServices: "სერვისები",
      navOffers: "შეთავაზებები",
      navContact: "კონტაქტი",
      welcome: "საბაჟო საბროკერო მომსახურება",
      desc: "ისარგებლეთ საბაჟო ბროკერის მომსახურებით",
      contact: "დაგვიკავშირდით",
      aboutTitle: "საბაჟო საბროკერო მომსახურება",
      aboutText:  "საექსპორტო ან/და იმპორტის საქონლის განბაჟება მოითხოვს გარკვეულ ცოდნას, დროსა და ადამიანურ რესურსებს. სამუშაოს გასამარტივებლად და რისკების შესამცირებლად გამოიყენეთ ექსპერტი ბროკერების მომსახურება, რომლებიც დაზოგავენ დროს და იქნებიან თქვენი წარმომადგენლები საბაჟო ტერმინალში.",
      servicesTitle: "რას მოიცავს საბაჟო საბროკერო მომსახურება?",
      service1: "საბაჟოს პროცედურები",
      service2: "ექსპერტიზა",
      service3: "ფიტოსანიტარიული სერტიფიკატის აღება",
      service4: "წარმოშობის სერთიფიკატის მიღება",
      service5: "სხვა საბაჟო დოკუმენტების აღება",
      offersTitle: "საბაჟო საბროკეროს ფასი",
      column1: "სახელი",
      column2: "საბაჟო დერეფანი",
      column3: "ფასი",
      table1: "წინასწარი დეკლარაცია",
      table2: "საბაჟო პროცედურა",
      table3: "ექსპერტიზა",
      table4: "რთული დეკლარაცია (15-ზე მეტი სასაქონლო კოდი)",
      table5: "ფიტოსანიტარიული სერტიფიკატი",
      table6: "წარმოშობის სერთიფიკატი",
      green: "მწვანე",
      red: "წითელი",
      yellow: "ყვითელი",
      any: "რომელიმე მათგანი",
      warning: "* ფასები განისაზღვრება ერთი საბაჟო დეკლარაციის მიხედვით, ფასში არ შედის საბაჟო მოსაკრებლები და სხვა სახელმწიფო გადასახადები.",
      input1: "კომპანიის დასახელება",
      input2: "თქვენი სახელი",
      input3: "თქვენი იმეილი",
      input4: "თქვენი ნომერი",
      input5: "ტვირთის ტიპი",
      input6: "მარშრუტი",
      input7: "რა სერვისი გნებავთ",
      send: "გაგზავნა",
      contactTitle: "მოგვწერეთ რა სერვისი გნებავთ",
      status: "მოთხოვნა გაიგზავნა წარმატებით",
      error: "მოთხოვნა ვერ გაიგზავნა. სცადეთ მოგვიანებით"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
