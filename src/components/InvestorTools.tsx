import { Button } from "@/components/ui/button";
import { Calculator, BookOpen, BarChart3, ArrowRight } from "lucide-react";

const InvestorTools = () => {
  const tools = [
    {
      icon: Calculator,
      title: "ROI Calculator",
      description: "Calculate potential returns on your real estate investments with our advanced calculator.",
      action: "Calculate Now",
      color: "bg-primary"
    },
    {
      icon: BookOpen,
      title: "Market Insights Blog",
      description: "Stay updated with latest market trends, investment tips, and expert analysis.",
      action: "Read Articles",
      color: "bg-accent-green"
    },
    {
      icon: BarChart3,
      title: "Property Comparison",
      description: "Compare multiple properties side-by-side to make informed investment decisions.",
      action: "Compare Properties",
      color: "bg-accent-gold"
    }
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Investor <span className="text-primary">Tools</span> & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools and insights to help you make smarter investment decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div key={index} className="feature-card p-8 text-center group hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {tool.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tool.description}
                </p>
                
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {tool.action}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Featured Blog Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Latest Market Insights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Real Estate Investment Trends in 2024",
                excerpt: "Discover the top real estate investment opportunities and market trends shaping the Indian property market this year.",
                readTime: "5 min read"
              },
              {
                title: "Fractional Ownership vs Traditional Investment",
                excerpt: "Compare the benefits and risks of fractional real estate ownership against traditional property investment methods.",
                readTime: "7 min read"
              },
              {
                title: "Tax Benefits of Real Estate Investment",
                excerpt: "Learn about the various tax advantages and deductions available for real estate investors in India.",
                readTime: "6 min read"
              }
            ].map((post, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-foreground mb-2">{post.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorTools;