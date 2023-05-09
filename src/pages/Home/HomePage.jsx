// export const HomePage = () => {
//   <div>
//     <h1>Hey there👋🏼! Let's begin to create our contacts 🥳</h1>
//   </div>;
// };
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Hey there👋🏼! Let's start to create our phonebook 🥳
      </h1>
    </div>
  );
};
