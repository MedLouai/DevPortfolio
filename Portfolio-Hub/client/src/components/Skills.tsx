import { motion } from "framer-motion";
import { useSkills } from "@/hooks/use-skills";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category if we had that data, for now just render list
  // Mocking categories since schema has 'category'
  const categories = ["Frontend", "Backend", "Tools", "Design"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            A look at my technical proficiency and the tools I use daily to build digital products.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-32 w-full rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {categories.map((category, catIndex) => {
              const categorySkills = skills?.filter(s => s.category === category) || [];
              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="bg-card p-8 rounded-2xl border border-border shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-primary rounded-full inline-block" />
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {categorySkills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <Progress value={skill.proficiency} className="h-2" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
