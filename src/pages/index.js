export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  };
}

export default function Home() {
  return null; 
}