import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data (realistic for early stage)
export const statsData = [
  {
    value: "500+",
    label: "Active Users",
  },
  {
    value: "₹50K+",
    label: "Transactions Tracked",
  },
  {
    value: "99.5%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Monthly Reports",
    description:
      "Generate comprehensive monthly reports to review your income, expenses, and savings trends",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Sandeep Parik",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "CoinCapita has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
  },
  {
    name: "Sweta",
    role: "Corporate Professional",
    image: "https://randomuser.me/api/portraits/women/61.jpg", // changed
    quote:
      "The receipt scanning feature in CoinCapita saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
  },
  {
    name: "Dr. Aishwarya",
    role: "Dentist",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "I recommend CoinCapita to all my clients. The multi-currency support and detailed analytics make it perfect for managing finances efficiently.",
  },
  {
    name: "Kushant Singh",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    quote:
      "Using CoinCapita has streamlined my budgeting and expense tracking. The automated insights help me make smarter financial decisions.",
  },
  {
    name: "Sangita ",
    role: "Family Manager",
    image: "https://randomuser.me/api/portraits/women/45.jpg", // changed
    quote:
      "CoinCapita has helped me keep track of household expenses easily. The simple interface makes budgeting less stressful.",
  },
  {
    name: "Anshumaan",
    role: "Budgeting Newbie",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote:
      "Thanks to CoinCapita, I’ve started learning how to manage my allowance and save better for my goals.",
  },
];
