import { BookOpen, Heart, Lightbulb, Shield, Star, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t } = useTranslation("home");
  const visionPoints = [
    {
      icon: Heart,
      title: t("vision.points.connect.title"),
      description: t("vision.points.connect.description"),
      color: "from-red-500 to-pink-500",
    },
    {
      icon: BookOpen,
      title: t("vision.points.word.title"),
      description: t("vision.points.word.description"),
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Users,
      title: t("vision.points.community.title"),
      description: t("vision.points.community.description"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: t("vision.points.privacy.title"),
      description: t("vision.points.privacy.description"),
      color: "from-purple-500 to-violet-500",
    },
  ];

  const values = [
    {
      icon: Star,
      title: t("vision.values.list.authenticity.title"),
      description: t("vision.values.list.authenticity.description"),
    },
    {
      icon: Heart,
      title: t("vision.values.list.kindness.title"),
      description: t("vision.values.list.kindness.description"),
    },
    {
      icon: Lightbulb,
      title: t("vision.values.list.innovation.title"),
      description: t("vision.values.list.innovation.description"),
    },
  ];

  return (
    <section
      id="vision"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("vision.header.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("vision.header.description")}
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visionPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${point.color} flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Personal Message - Divine Calling */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t("vision.story.title")}
              </h3>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed opacity-95">
              <p className="font-medium text-amber-200">
                {t("vision.story.paragraphs.p1")}
              </p>

              <p>
                {t("vision.story.paragraphs.p2")}{" "}
                <span className="font-semibold italic">
                  {t("vision.story.paragraphs.p2quote")}
                </span>
              </p>

              <p>
                {t("vision.story.paragraphs.p3a")}{" "}
                <span className="italic">
                  {t("vision.story.paragraphs.p3b")}
                </span>
                <br />
                {t("vision.story.paragraphs.p3c")}{" "}
                <span className="font-semibold">
                  {t("vision.story.paragraphs.p3d")}
                </span>
              </p>

              <p>
                {t("vision.story.paragraphs.p4a")}{" "}
                <span className="italic">
                  {t("vision.story.paragraphs.p4b")}
                </span>
                <br />
                {t("vision.story.paragraphs.p4c")}{" "}
                <span className="italic">
                  {t("vision.story.paragraphs.p4d")}
                </span>
                <br />
                {t("vision.story.paragraphs.p4e")}{" "}
                <span className="font-semibold text-amber-300">
                  {t("vision.story.paragraphs.p4f")}
                </span>
              </p>

              <p>
                {t("vision.story.paragraphs.p5a")}{" "}
                <span className="italic">
                  {t("vision.story.paragraphs.p5b")}
                </span>
                <br />
                {t("vision.story.paragraphs.p5c")}{" "}
                <span className="font-semibold">
                  {t("vision.story.paragraphs.p5d")}
                </span>
              </p>

              <p className="font-medium">
                {t("vision.story.paragraphs.p6")}
              </p>

              <p>
                {t("vision.story.paragraphs.p7")}
              </p>

              <p className="text-sm opacity-90">
                {t("vision.story.paragraphs.p8")}
              </p>
            </div>

            <div className="text-center mt-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6">
                <p className="text-lg font-medium italic mb-2">
                  {t("vision.story.quote")}
                </p>
                <p className="text-sm text-amber-300">{t("vision.story.reference")}</p>
                <div className="mt-4 pt-4 border-t border-white/30">
                  <p className="font-semibold text-base">{t("vision.story.founder.name")}</p>
                  <p className="text-sm opacity-90">{t("vision.story.founder.title")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t("vision.values.title")}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            {t("vision.values.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              {t("vision.cta.title")}
            </h4>
            <p className="text-gray-600 mb-6">
              {t("vision.cta.description")}
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("signup")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {t("vision.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
