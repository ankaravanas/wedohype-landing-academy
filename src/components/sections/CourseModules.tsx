"use client";

import { useState } from "react";
import { Play, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const modules = [
  {
    title: "MODULE 1",
    subtitle: "ΤΑ ΘΕΜΕΛΙΑ - ΤΙ ΕΙΝΑΙ LANDING PAGE ΚΑΙ ΓΙΑΤΙ ΤΗ ΧΡΕΙΑΖΕΣΑΙ",
    lessons: [
      "Μάθημα 1: Γιατί χρειάζεσαι Landing Page για να πουλήσεις",
      "Μάθημα 2: Η ανατομία μιας Landing Page που πουλάει",
      "Μάθημα 3: Η διαδρομή από τη διαφήμιση στην πώληση",
      "Μάθημα 4: Case Studies: Πραγματικά αποτελέσματα",
      "Μάθημα 5:",
    ],
    hasPlatformBadges: true,
  },
  {
    title: "MODULE 2",
    subtitle: "ΣΧΕΔΙΑΣΜΟΣ ΣΤΡΑΤΗΓΙΚΗΣ",
    lessons: [
      "Μάθημα 6: Γνώρισε τον πελάτη σου με AI",
      "Μάθημα 7: Ανάλυση ανταγωνισμού & positioning",
    ],
  },
  {
    title: "MODULE 3",
    subtitle: "ΓΡΑΨΕ ΚΕΙΜΕΝΑ ΠΟΥ ΠΟΥΛΑΝΕ ΜΕ AI",
    lessons: [
      "Μάθημα 8: Copy frameworks που πουλάνε",
      "Μάθημα 9: Headlines που σταματούν το scrolling",
      "Μάθημα 10: Body copy που πουλάει",
      "Μάθημα 11: Δημιουργία ολοκληρωμένου offer & copywriting",
    ],
  },
  {
    title: "MODULE 4",
    subtitle: "ΧΤΙΣΕ ΤΗ LANDING PAGE ΣΟΥ ΧΩΡΙΣ DEVELOPER",
    lessons: [
      "Μάθημα 12: Αρχές design που αυξάνουν τις πωλήσεις",
      "Μάθημα 13: platform setup",
      "Μάθημα 14: Complete hands-on build session",
      "Μάθημα 15: Προηγμένες λειτουργίες και προσαρμογή",
      "Μάθημα 16: Lead management dashboard",
    ],
    hasLovableBadge: true,
  },
  {
    title: "MODULE 5",
    subtitle: "ΒΓΕΣ LIVE ΜΕ ΣΙΓΟΥΡΙΑ!",
    lessons: [
      "Μάθημα 17: Τα βασικά integrations",
      "Μάθημα 18: Πρωτόκολλο ελέγχου πριν να βγεις live",
      "Μάθημα 19: Στρατηγική για να βγεις live",
    ],
  },
  {
    title: "MODULE 6",
    subtitle: "ΒΕΛΤΙΣΤΟΠΟΙΗΣΗ ΚΑΙ ΑΥΞΗΣΗ ΑΠΟΤΕΛΕΣΜΑΤΩΝ",
    lessons: [
      "Μάθημα 20: Analytics και δεδομένα που έχουν σημασία",
      "Μάθημα 21: Εκτόξευσε την επιτυχία σου",
      "Μάθημα 22: Τα επόμενα βήματα - Περιεχόμενο & διαφήμιση",
    ],
  },
];

export default function CourseModules() {
  const [expandedModules, setExpandedModules] = useState<number[]>([0]); // First module open by default

  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] mb-2">
            Τι περιλαμβάνει το Course (Βήμα-Βήμα)
          </h2>
        </div>

        {/* Modules Container */}
        <div className="bg-[#f6f6f6] rounded-[23px] p-6 md:p-8 max-w-[1000px] mx-auto">
          <div className="space-y-4">
            {modules.map((module, moduleIndex) => {
              const isExpanded = expandedModules.includes(moduleIndex);
              return (
                <div
                  key={moduleIndex}
                  className="bg-white rounded-[15px] overflow-hidden"
                >
                  {/* Module Header - Clickable */}
                  <button
                    onClick={() => toggleModule(moduleIndex)}
                    className="w-full p-4 md:p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-[14px] md:text-[16px] font-bold text-[#15301f] leading-[24px]">
                      <span className="text-[#85c65f]">{module.title}</span>
                      <br className="md:hidden" />
                      <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
                      {module.subtitle}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] text-[#15301f]/50">
                        {module.lessons.length} μαθήματα
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-[#15301f]/50" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Lessons List - Expandable */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-5 pt-2 pb-4 md:pb-5 space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="bg-[#f6f6f6] rounded-[10px] px-4 py-3 flex items-center gap-3"
                            >
                              <div className="w-6 h-6 bg-[#85c65f] rounded-full flex items-center justify-center flex-shrink-0">
                                <Play className="w-3 h-3 text-white ml-0.5" fill="white" />
                              </div>
                              <span className="text-[#15301f] text-[13px] md:text-[14px] leading-[20px]">
                                {lesson}
                              </span>

                              {/* Platform badges for Module 1 Lesson 5 */}
                              {module.hasPlatformBadges && lessonIndex === module.lessons.length - 1 && (
                                <div className="flex items-center gap-2 ml-auto">
                                  <span className="text-[#15301f] text-[13px]">vs</span>
                                  <div className="flex items-center gap-2">
                                    <span className="bg-white border border-gray-200 rounded px-2 py-1 text-[10px] font-medium text-gray-600">
                                      Lovable
                                    </span>
                                    <span className="bg-white border border-gray-200 rounded px-2 py-1 text-[10px] font-medium text-gray-600">
                                      WordPress
                                    </span>
                                    <span className="bg-white border border-gray-200 rounded px-2 py-1 text-[10px] font-medium text-gray-600">
                                      ClickFunnels
                                    </span>
                                  </div>
                                </div>
                              )}

                              {/* Lovable badge for Module 4 */}
                              {module.hasLovableBadge && lessonIndex === 0 && (
                                <div className="ml-auto">
                                  <span className="bg-white border border-gray-200 rounded px-2 py-1 text-[10px] font-medium text-gray-600">
                                    Lovable
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
