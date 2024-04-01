import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }) {
    // ...

    return (
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
    );
}
const HomeScreen = () => {
    return (
      <MainLayout>
      
      </MainLayout>
    );
  };