import { CategoryInfo } from "@/types/project";

export const categories: CategoryInfo[] = [
  { id: "all", label: "Toate", emoji: "🌐", color: "from-indigo-500 to-cyan-500" },
  { id: "resto", label: "Restaurante", emoji: "🍽️", color: "bg-indigo-600", description: "Tot ce are nevoie un restaurant ca să fie modern: de la poze cu mâncare făcute de AI, până la asistenți pentru clienți." },
  { id: "ai", label: "Unelte AI", emoji: "🤖", color: "bg-cyan-500", description: "Programe deștepte care te ajută să scrii, să desenezi și să fii mai creativ în fiecare zi." },
  { id: "mkt", label: "Marketing", emoji: "📣", color: "bg-amber-500", description: "Idei și unelte care te ajută să te faci cunoscut și să găsești clienți noi pe internet." },
  { id: "energy", label: "Energie", emoji: "☀️", color: "bg-emerald-500", description: "Soluții verzi pentru viitor: cum să folosești soarele ca să ai curent electric ieftin și curat." },
  { id: "ops", label: "Operațiuni", emoji: "📊", color: "bg-violet-500", description: "Sisteme care organizează treaba într-o firmă și fac lucrurile plictisitoare să meargă singure." },
  { id: "biz", label: "Afaceri", emoji: "💼", color: "bg-orange-500", description: "Tot ce îți trebuie ca să crești o afacere, să deschizi o franciză sau să ai grijă de mașina ta." },
  { id: "security", label: "Securitate", emoji: "🛡️", color: "bg-red-500", description: "Soluții avansate pentru protecția datelor și siguranța personală în era digitală." },
  { id: "life", label: "Lifestyle", emoji: "✨", color: "bg-pink-500", description: "Proiecte pentru o viață mai frumoasă: sănătate, relații bune cu cei dragi și experiențe de neuitat." },
];
