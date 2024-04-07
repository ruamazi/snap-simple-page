import BlueSection from "@/components/BlueSection";
import WhiteSection from "@/components/WhiteSection";
import { data1, data2, data3 } from "@/data";

export default function Home() {
  return (
    <main>
      <WhiteSection />
      <BlueSection
        imageSrc={data1.imageSrc}
        title={data1.title}
        text={data1.text}
      />
      <BlueSection
        imageSrc={data2.imageSrc}
        title={data2.title}
        text={data2.text}
        imageRight={true}
      />
      <BlueSection
        imageSrc={data3.imageSrc}
        title={data3.title}
        text={data3.text}
      />
      <WhiteSection />
    </main>
  );
}
