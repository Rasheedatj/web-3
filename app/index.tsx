import Actions from '@/components/home/actions';
import Header from '@/components/home/header';
import Hero from '@/components/home/hero';
import Transactions from '@/components/home/transactions';
import { ScrollView } from 'react-native';

export default function Index() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <Header />
      <Hero />
      <Actions />
      <Transactions />
    </ScrollView>
  );
}
