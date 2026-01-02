import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlphabetGrid from "@/components/foundation/AlphabetGrid";
import KanjiGrid from "@/components/foundation/KanjiGrid";
import RadicalGrid from "@/components/foundation/RadicalGrid";

const Foundation = () => {
  return (
    <Layout>
      <div className="bg-background">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-accent to-secondary py-12 md:py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Nhập môn Tiếng Nhật
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bắt đầu hành trình học tiếng Nhật với bảng chữ cái Hiragana,
              Katakana, 214 bộ thủ và 512 Kanji cơ bản
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="container py-8 md:py-12">
          <Tabs defaultValue="alphabet" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger
                value="alphabet"
                className="text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Bảng chữ cái
              </TabsTrigger>
              <TabsTrigger
                value="radicals"
                className="text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                214 Bộ thủ
              </TabsTrigger>
              <TabsTrigger
                value="kanji"
                className="text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                512 Kanji
              </TabsTrigger>
            </TabsList>

            <TabsContent value="alphabet" className="animate-fade-in">
              <AlphabetGrid />
            </TabsContent>

            <TabsContent value="radicals" className="animate-fade-in">
              <RadicalGrid />
            </TabsContent>

            <TabsContent value="kanji" className="animate-fade-in">
              <KanjiGrid />
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </Layout>
  );
};

export default Foundation;
