import { Header } from '@/features/dashboard';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Dashboard = () => {
  return (
    <div className={`bg-background w-screen min-h-screen text-foreground font-sans ${inter.className}`}>
      <Header />
    </div>
  );
};

export default Dashboard;
