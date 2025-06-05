import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo.svg";
import map from "../image/map.svg";
import Agri from "../image/Agri.jpg";
import Cattel3 from "../image/Cattel3.jpg";
import Ceramic from "../image/Ceramic.jpg";
import agri1 from "../image/agri1.jpg";
import Agri2 from "../image/Agri2.jpg";
import Agri3 from "../image/Agri3.jpg";
import Agri4 from "../image/Agri4.jpg";
import Agri5 from "../image/Agri5.jpg";
import Agri6 from "../image/Agri6.jpg";
import seed1 from "../image/seed1.jpg";
import seed2 from "../image/seed2.jpg";
import seed3 from "../image/seed3.jpg";
import seed4 from "../image/seed4.jpg";
import seed5 from "../image/seed5.png";
import seed6 from "../image/seed6.jpg";
import Cattel7 from "../image/Cattel7.jpeg";
import Cattel8 from "../image/Cattel8.jpeg";
import Cattel9 from "../image/Cattel9.jpeg";
import Cattel10 from "../image/Cattel10.jpeg";
import Cattel11 from "../image/Cattel11.jpeg";
import Cattel12 from "../image/Cattel12.jpeg";
import BandHeater from "../image/BandHeater.png";
import ENDSealing from "../image/ENDSealing.png";
import HighAlumina from "../image/HighAlumina.png";
import MCBCeramic from "../image/MCBCeramic.png";
import Mechanical from "../image/Mechanical.png";
import IgnitionElectrod from "../image/IgnitionElectrod.png";
import SteatiteConnector from "../image/SteatiteConnector.png";
import TerminalBlock from "../image/TerminalBlock.png";
import Thermostat from "../image/Thermostat.png";
import cattelback from "../image/cattelback.jpeg";
import abc4 from "../image/abc4.jpg";
import cremic2 from "../image/cremic2.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Form from "../components/Form";


// Dummy Category Data
const categoryData = [
  {
    id: 1,
    name: "Agriculture",
    title: "Agriculture Products",
    description: "We provide high-quality agricultural products.",
    image: Agri,
    products: [
      {
        id: 1,
        image: agri1,
        title: "Java Peanuts",
        desc: "Protect crops from pests & diseases.",
        singleDesc: `
        Java Peanuts are high-quality, protein-rich peanuts known for their superior taste, nutritional benefits, and versatile applications. They are carefully cultivated to ensure maximum purity, freshness, and export-quality standards.
        Java peanuts are rich in proteins, healthy fats, fiber, and essential minerals, making them highly valuable in the food industry. They are widely used for snack production, peanut butter, oil extraction, and animal feed. Additionally, their nitrogen-fixing properties contribute to soil fertility, making them an environmentally sustainable crop choice.`},
      {
        id: 2, image: Agri2, title: "Bold peanuts", desc: "Efficient water management.", singleDesc: `
       Bold peanuts, also known as Runner peanuts, are a popular variety of peanuts renowned for their high fat and protein content, making them ideal for peanut paste and butter production. They are characterized by their red or dark red skin and elongated shape. These peanuts have a high oil content, typically exceeding 25%, which is higher than other varieties like Java peanuts. Bold peanuts are widely cultivated in India, particularly in states like Gujarat and Rajasthan, and account for a significant portion of the country's oilseed production `},

      {
        id: 3, image: Agri3, title: "Hulled Sesame seed", desc: "High-quality seeds for better farming.", singleDesc: `
      Hulled sesame seeds are sesame seeds with their outer husk removed, making them easier to digest and enhancing their culinary appeal. They are often white or whitish in color and have a softer texture compared to natural sesame seeds. Hulled sesame seeds are rich in nutrients such as protein, healthy fats, dietary fiber, and minerals like calcium and iron. They are widely used in bakery products, confectionery, and as a topping for various dishes due to their nutty flavor and nutritional benefits` },
      {
        id: 4, image: Agri4, title: "Natural Sesame seeds", desc: "Boost crop yield naturally.", singleDesc: `
       Natural sesame seeds are sesame seeds that have not undergone the hulling process, meaning they retain their outer husk. They are available in various colors, including white, black, and brown, and are known for their nutty flavor and crunchy texture. These seeds are rich in nutrients such as protein, healthy fats, vitamins, and minerals like calcium and iron. They are widely used in culinary applications, health foods, and as a source of sesame oil.`},
      {
        id: 5, image: Agri5, title: "Groundnut Oil", desc: "Efficient tools for easy harvesting.", singleDesc: `
       Groundnut oil, also known as peanut oil, is a popular cooking oil extracted from groundnuts (peanuts). It is rich in healthy fats, including monounsaturated and polyunsaturated fatty acids, which are beneficial for heart health by reducing bad cholesterol levels and increasing good cholesterol. Groundnut oil is also a good source of antioxidants like Vitamin E, which protects cells from damage and supports skin health. It has a high smoke point, making it ideal for high-temperature cooking and frying.`},
      {
        id: 6, image: Agri6, title: "Raw Cotton,", desc: "Analyze soil quality for better farming.", singleDesc: `
      Raw cotton, also known as seed cotton, is the raw material obtained from cotton plants. It consists of cotton fibers attached to the seeds within the cotton bolls. The fibers are soft, fluffy, and grow in a protective case around the seeds. Raw cotton is harvested from the cotton plant using mechanical pickers or strippers, which remove the fibers from the bolls. After harvesting, raw cotton undergoes processing to separate the fibers from the seeds and other debris, resulting in lint cotton, which is used in textile production.`},
    ],
  },
  {
    id: 2,
    name: "Cattle Feed",
    title: "Cattle Feed",
    description: "Best nutrition for livestock with premium quality.",
    image: Cattel3,
    products: [
      {
        id: 1, image: Cattel7, title: "Alfalfa hay", desc: "Alfalfa hay is a nutrient-rich, dried grass commonly fed to small animals like rabbits, guinea pigs, and horses.", singleDesc: `
        Grade Standard	Feed Grade
Country of Origin	India
Moisture	12% to 16%
Protein	15% to 22%
Fat	1.5% to 2.5%
Fibre	24% to 32%
Ash	2.5% to 6%
Baleweight	35 Kg`},
      {
        id: 2, image: Cattel8, title: "Wheat straw", desc: "Wheat straw is a fibrous byproduct of wheat harvesting, often used as bedding, mulch, or animal feed.", singleDesc: `
  Moisture	6%
Shelf Life	24 Months
Grade	Feed Grade
Usage/Application	Animal Feeding`},
      {
        id: 3, image: Cattel9, title: "Dry Sugar Beet Pulp", desc: "Dry sugar beet pulp is a high-fiber, digestible byproduct of sugar beet processing, commonly used as animal feed for horses and livestock.", singleDesc: `
   Packaging Size	50 Kg
Is It Organic	Organic
Packaging Type	PP Bags`},
      {
        id: 4, image: Cattel10, title: " Corn Silage", desc: "Corn silage is fermented, chopped corn plants (including stalks, leaves, and kernels) used as a high-energy feed for livestock, especially dairy cattle.", singleDesc: `
 Glutinous	Non Glutinous
Speaciality	Improves Milk Yield, Improves Health
Moisture	67.25g/100g(%)
Dry Matter	32.75g/100g(%)
Crude Protein	8.11g/100g(%)
Crude Fiber	23.43g/100g(%)
Acid Detergent Fiber	33.43g/100g(%)
Neutral Detergent Fiber	44.46g/100g(%)`},
      {
        id: 5, image: Cattel11, title: " Alfalfa pallets ", desc: "Alfalfa pellets are compressed, dried alfalfa grass used as a nutritious feed for small animals like rabbits, guinea pigs, and hamsters.", singleDesc: `
 Moisture	6.03(%)
Dry Matter	93.97(%)
Crude Protein	24(%)
Crude FAT	4(%)
Acid Detergent Fiber	31.71(%)
Neutral Detergent Fiber	44.68(%)`},
      {
        id: 6, image: Cattel12, title: "Green Fodder", desc: "Green fodder refers to fresh, green plant material used as feed for livestock, providing essential nutrients.", singleDesc: `
 Green fodder refers to fresh, vegetative plant material used as feed for livestock, offering essential nutrients to support their health and productivity. It is typically high in moisture content and rich in fiber, proteins, vitamins, and minerals.`},

      {
        id: 7, image: seed1, title: "Soymeal", desc: "Enhance milk production & nutrition.", singleDesc: `
      Soybean meal is a high-protein feed supplement derived from soybeans after the oil extraction process. It contains about 45-50% protein, making it an essential ingredient in animal feed, particularly for poultry and livestock. Soybean meal is also used in human food products, such as soy flour, soy grits, and as a component in meat or dairy substitutes like tofu and soymilk. Its high nutritional value and versatility make it a crucial product in both agricultural and food industries.`},
      {
        id: 8, image: seed2, title: "Cotton seed cake", desc: "Essential nutrition for young cattle.", singleDesc: `
       Cottonseed cake, also known as cottonseed meal cake, is a by-product obtained after extracting oil from cottonseeds. It is a valuable source of protein, energy, and fiber, making it an excellent supplement for animal feed, particularly for cattle. The nutritional content of cottonseed cake varies depending on factors like the method of oil extraction and the degree of decortication. It contains around 20-42% protein, depending on the processing method, and is rich in phosphorus and other essential nutrients.`},
      {
        id: 9, image: seed3, title: "Green millet", desc: "Increase muscle growth & strength.", singleDesc: `
      Green millet, commonly known as Bajra or Pearl Millet (Pennisetum glaucum), is a highly nutritious cereal crop widely cultivated in India and Africa. It is rich in carbohydrates, dietary fiber, and essential minerals like magnesium, phosphorus, and iron. Green millet is a drought-tolerant crop that thrives in well-drained soils and can grow under extreme weather conditions, making it ideal for rainfed agriculture.`},
      {
        id: 10, image: seed4, title: "Yellow maize", desc: "Balanced minerals for healthy cattle.", singleDesc: `
       Yellow maize, also known as yellow corn, is a variety of maize characterized by its yellow kernels, which derive their color from carotenoids like lutein and zeaxanthin. These pigments not only contribute to the yellow color but also provide nutritional benefits, such as supporting eye health. Yellow maize is widely used as a source of energy and nutrients in both human food and animal feed. It is particularly valued for its high content of β-carotene, a precursor to vitamin A, making it beneficial for regions where vitamin A deficiency is prevalent.`},
      {
        id: 11, image: seed5, title: "Rapeseed meal", desc: "Premium quality grass-based pellets.", singleDesc: `
       Rapeseed meal, a by-product of rapeseed oil extraction, is a high-protein feed ingredient widely used in animal nutrition. It contains approximately 30-40% protein, making it an excellent source of essential amino acids like lysine, methionine, and threonine. Rapeseed meal is rich in minerals such as calcium, phosphorus, and potassium, which are crucial for bone development and overall animal health. However, it has a higher fiber content compared to soybean meal, which can affect its digestibility.`},
      {
        id: 12, image: seed6, title: "Castor seed meal", desc: "Boost immunity & overall health.", singleDesc: `
        Castor seed meal is a by-product obtained after extracting oil from castor seeds. It is rich in nutrients such as nitrogen, phosphorus, and potassium, making it an excellent organic fertilizer for enhancing soil fertility. Castor seed meal is also known for its ability to neutralize the detrimental effects of chemical fertilizers and improve soil health by promoting beneficial bacteria and controlling nematodes. However, it contains ricin, a toxic compound that makes it unsuitable for animal feed unless detoxified`},
    ],
  },
  {
    id: 3,
    name: "Ceramic Parts & Insulators",
    title: "Ceramic Parts & Insulators",
    description: "Specialized ceramic parts & insulators.",
    image: Ceramic,
    products: [
      {
        id: 1, image: BandHeater, title: "Band Heater Ceramic", desc: "Durable ceramic band heaters designed for efficient and uniform heating in plastic processing equipment.",
        singleDesc: `Ceramic Band Heaters are made with a stainless steel outer sheath and internal ceramic insulation, delivering uniform heat distribution and excellent thermal efficiency. With a working temperature of up to 650°C, they offer superior durability, thermal shock resistance, and energy savings compared to conventional heaters—ideal for injection molding, blow molding, and extrusion machinery.          `
      },
      {
        id: 2, image: ENDSealing, title: "END Sealing Bead", desc: "Robust end sealing beads designed to provide airtight and durable seals in high-temperature ceramic and electrical applications.",
singleDesc: `
END Sealing Beads are engineered from high-purity ceramic materials to offer thermal insulation and sealing integrity in extreme environments. They are typically used at the junction of ceramic heaters, tubes, or elements to prevent heat loss and maintain operational stability. Resistant to thermal shock, corrosion, and mechanical stress, these beads ensure long-lasting performance in demanding industrial settings.
`},

      {
        id: 3, image: HighAlumina, title: "High Alumina Ceramic", desc: "High-purity alumina ceramics offering exceptional hardness, thermal stability, and wear resistance for industrial and electrical applications.",
singleDesc: `
High Alumina Ceramics, typically composed of 92–99.8% Al₂O₃, are known for their excellent mechanical strength, dielectric properties, and resistance to corrosion and high temperatures. Ideal for electrical insulators, wear-resistant linings, and precision components in industries such as electronics, metallurgy, and chemical processing.
`
      },
      {
        id: 4, image: IgnitionElectrod, title: "Ignition Electrod", desc: "Precision ignition electrodes designed for reliable spark generation in gas burners and combustion systems.",
singleDesc: `
Ignition Electrodes are crafted using high-purity ceramic insulation and nickel/chromium alloy conductors to ensure consistent spark performance in gas-fired heating systems. With excellent thermal shock resistance and electrical insulation, they are ideal for industrial furnaces, boilers, ovens, and burners requiring dependable ignition under extreme conditions.
`
      },
      {
        id: 5, image: MCBCeramic, title: "MCB Ceramic plat", desc: "High-strength ceramic plates used in MCBs for electrical insulation and arc resistance under high-temperature conditions.",
singleDesc: `
MCB Ceramic Plates are manufactured from high-purity alumina to provide superior thermal insulation, dielectric strength, and resistance to arc and heat in miniature circuit breakers. These plates ensure long-term reliability and safety in electrical distribution systems by withstanding high interrupting currents and mechanical stress.
`
      },
      {
        id: 6, image: Mechanical, title: "Mechanical Seal Ring",desc: "Precision-engineered ceramic seal rings designed to prevent leakage and withstand extreme mechanical and thermal stress in rotating equipment.",
singleDesc: `
Mechanical Seal Rings are made from advanced ceramic materials like alumina or silicon carbide to ensure excellent wear resistance, thermal stability, and chemical inertness. Used in pumps, compressors, and mixers, these rings maintain a tight seal under high pressure and temperature, enhancing the durability and efficiency of sealing systems.
`
      },
      {
        id: 7, image: SteatiteConnector, title: "Steatite Connector", desc: "High-performance steatite ceramic connectors offering excellent electrical insulation and thermal resistance for high-temperature applications.",
singleDesc: `
Steatite Connectors are manufactured from magnesium silicate-based ceramic, providing high dielectric strength, low electrical loss, and thermal durability. Commonly used in heaters, lighting systems, and electrical terminals, these connectors ensure stable performance in high-voltage and high-temperature environments.
`
      },
      {
        id: 8, image: TerminalBlock, title: "Terminal Block", desc: "Durable terminal blocks designed for secure electrical connections, offering excellent heat resistance and insulation in high-temperature circuits.",
singleDesc: `
Ceramic Terminal Blocks are made from high-purity steatite or alumina ceramic, providing superior thermal stability, dielectric strength, and resistance to electrical arcing. Ideal for heating elements, industrial ovens, and high-load circuits, they ensure reliable wire terminations in demanding electrical environments.
`
      },

      {
        id: 9, image: Thermostat, title: "Thermostat Parts",desc: "Precision-engineered ceramic thermostat parts ensuring accurate temperature control and high thermal durability in heating and cooling systems.",
singleDesc: `
Thermostat Parts are made from high-temperature resistant ceramic materials to provide excellent insulation, mechanical stability, and long-term performance. These components are essential for precise thermal regulation in appliances such as water heaters, ovens, HVAC systems, and industrial temperature controllers.
`
      },
    ],
  },
];

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mt-5">
        <div className="flex border border-gray-300 rounded-lg overflow-x-auto scrollbar-hidden shadow-md w-full sm:w-auto">
          {categoryData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex-shrink-0 px-6 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === category.id
                  ? "bg-blue-600 text-white font-bold"
                  : "hover:text-white hover:bg-blue-500 text-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  // Get selected category data dynamically
  const selectedCategory = categoryData.find((cat) => cat.id === activeTab);

  return (
    <>
      {/* Navbar Section */}
      <nav
        className="bg-cover bg-center text-white h-auto"
        style={{ backgroundImage: `url(${activeTab === 1 ? abc4 : activeTab === 2 ? cattelback : cremic2})` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <img src={logo} alt="Globwing logo" className="h-13 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8 font-semibold">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <Link to="/About" className="hover:text-blue-400">
                About us
              </Link>
              <Link to="/Product" className="hover:text-blue-400">
                Product
              </Link>
              <Link to="/Export" className="hover:text-blue-400">
                Export
              </Link>
              <Link to="/Download" className="hover:text-blue-400">
                Download
              </Link>
            </div>
            <Link
              to="/contact"
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact us
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 text-gray-800">
              <Link to="/" className="block hover:text-blue-600">
                Home
              </Link>
              <Link to="/About" className="block hover:text-blue-600">
                About us
              </Link>
              <Link to="/Product" className="block hover:text-blue-600">
                Product
              </Link>
              <Link to="/Export" className="block hover:text-blue-600">
                Export
              </Link>
              <Link to="/Download" className="block hover:text-blue-600">
                Download
              </Link>
              <Link
                to="/Contact"
                className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
              >
                Contact us
              </Link>
            </div>
          )}
        </div>

        {/* Navbar Hero Section */}
        <div className="py-20 md:py-40 lg:py-60 px-6 md:px-10 ">
          <h1 className="text-white text-5xl md:text-7xl font-bold mt-6" style={{ fontFamily: 'Frank Ruhl Libre' }}>Product</h1>
          <p className="text-white text-lg md:text-2xl">
            The quality products you trust.
          </p>
        </div>
      </nav>

      {/* Category Tabs */}
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Product Cards (Updated for Dynamic Content) */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {selectedCategory.products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <LazyLoadImage src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-600">{product.title}</h3>
              <p className="text-gray-700">{product.desc}</p>
              <span
                onClick={() => {
                  navigate('/Singlep', {
                    state: {
                      productDetail: {
                        id: product.id,
                        image: product.image,
                        title: product.title,
                        desc: product.desc, // Ensure this is being passed
                        singleDesc: product.singleDesc, // Ensure long description is passed
                      }
                    }
                  });
                }}
                className="text-blue-600 mt-2 inline-block cursor-pointer"
              >
                Read More →
              </span>
            </div>
          </div>
        ))}
      </div>

        <Form/>
    </>
  );
};

export default Navbar;
