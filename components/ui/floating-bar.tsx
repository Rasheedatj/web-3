import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function FloatingTabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  return (
    <View
      className='absolute bottom-10 left-20 right-20 h-20 px-5 flex-row bg-gray200 rounded-full items-center justify-around'
      style={styles.container}
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            className='flex-1 items-center'
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                color: isFocused ? '#F3BA29' : '#979797',
                focused: isFocused,
                size: 26,
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
});
