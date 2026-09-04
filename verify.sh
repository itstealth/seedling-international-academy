#!/bin/bash
cd /home/danish/Pictures/seedling-international-academy

echo "1. Sitemap missing"
ls public/sitemap.xml app/sitemap.ts 2>/dev/null || echo "Not found"

echo "2. robots.txt missing"
cat app/robots.ts 2>/dev/null | grep -i "sitemap" || echo "Not found"

echo "3. Duplicate Title & 4. Meta Description"
# Check layout.tsx or page.tsx for titles
grep -rn "Seedling International Academy | Best Cambridge School" app/

echo "5. Canonical Tag"
grep -rn "canonical" app/

echo "6. Wrong sister school in testimonial"
grep -rn "Seedling International School has been a second home" app/page.tsx

echo "7. Missing CTAs - homepage pathway"
grep -rn "link: \"/academics/" app/page.tsx

echo "8. Navigation gap - Cambridge Early Years"
grep -A 10 "Academics" components/layout/Navbar.tsx 2>/dev/null

echo "9. Broken image 2204"
grep -rn "DSC_2204.JPG" app/page.tsx

echo "10. Write a review"
grep -A 2 "Write a review" app/page.tsx

echo "11. Generic alt on testimonial"
grep -rn "alt={card.label}" app/page.tsx

echo "12. Duplicate alt on gallery"
grep -rn "alt=\"Campus Life\"" app/page.tsx

echo "13. US/UK spelling"
grep -rnE "Personalized|Counseling|Enroll" app/page.tsx

echo "14. Brand name in Leadership"
grep -rn "Seedling International School" app/about/leadership/page.tsx 2>/dev/null

echo "15. Malformed alt in Leadership"
grep -rn "CEO CEO & Director" app/about/leadership/page.tsx 2>/dev/null

echo "16. Plan a visit CTA"
grep -rn "Plan a Visit" app/about/standards/page.tsx 2>/dev/null

echo "17-20. Alt text on Hero banners"
grep -rn "imageAlt" app/academics/

echo "21. Raw whatsapp export images"
grep -rn "WhatsApp Image" app/academics/

echo "22. Subject count Upper Secondary"
grep -rn "100 Subjects" app/academics/upper-secondary/page.tsx 2>/dev/null

echo "23. Group count Advanced"
grep -rn "Six Groups" app/academics/advanced/page.tsx 2>/dev/null

echo "24. Subject count Primary"
grep -rn "Ten Subjects To Explore" app/academics/primary/page.tsx 2>/dev/null

echo "25. Subject count Lower Secondary"
grep -rn "10+ Subjects" app/academics/lower-secondary/page.tsx 2>/dev/null

echo "26. Misspelled word"
grep -rn "endored" app/academics/primary/page.tsx 2>/dev/null

echo "27. Blank sections Upper Secondary"
grep -rn "whileInView" app/academics/upper-secondary/page.tsx 2>/dev/null

echo "28. Stellar Saturday"
grep -rn "Stellar Saturday" app/school-life/page.tsx 2>/dev/null

echo "29. Farewell Ceremony"
grep -rn "Farewell Ceremony" app/school-life/page.tsx 2>/dev/null

echo "30. Broken image Apply & Pay"
grep -rn "registration-banner.jpg" app/admissions/ 2>/dev/null

echo "31. No campus selector"
# skipping complex one

echo "32. Third party website in Admissions"
grep -rn "cambridgeinternationalschool.com" app/admissions/ 2>/dev/null

echo "33. Missing dropdown option Class 10"
grep -rn "Class 10" app/admissions/ 2>/dev/null

echo "34. Breadcrumb label"
grep -rn "Home > Home" app/faculty-testimonials/page.tsx 2>/dev/null

echo "35. Mislabeled testimonial Arnav"
grep -rn "FACULTY" app/faculty-testimonials/page.tsx | grep -A 5 "Arnav" 2>/dev/null

echo "36. Unrelated phone numbers"
grep -rn "3623000" app/admissions/ 2>/dev/null

echo "37. Grammar form are"
grep -rn "form are available" app/admissions/ 2>/dev/null

echo "38. Admission are open"
grep -rn "Admission are open" app/admissions/ 2>/dev/null

echo "40. Incomplete contact info SMIA"
grep -rn "95877" app/admissions/ 2>/dev/null

echo "41. Contradictory stat Campuses"
grep -rn "1993" app/campuses/page.tsx 2>/dev/null

echo "42. Thin stat Campuses"
grep -rn "Modern" app/campuses/page.tsx 2>/dev/null

echo "43-45. Missing alt text"
grep -rn "imageAlt=" app/admissions/ app/campuses/ app/faculty-testimonials/ 2>/dev/null

echo "46. Inconsistent heading style"
grep -rn "FACULTY" app/faculty-testimonials/page.tsx 2>/dev/null

echo "47. Required field marker"
grep -rn "Fee \*" app/admissions/ 2>/dev/null

echo "49. Wrong sister school in Contact"
grep -rn "SPS - Jawahar Nagar" app/contact-us/page.tsx 2>/dev/null

echo "50. SPS / SIA in Contact"
grep -rn "SPS / SIA" app/contact-us/page.tsx 2>/dev/null

echo "51. Wrong domain Policies"
grep -rn "cambridgeinternationalschool.com" app/policies/page.tsx 2>/dev/null

echo "52-53. Email mismatch"
grep -rn "cambridgeacademy@hotmail.com" app/policies/ app/mandatory-disclosures/ 2>/dev/null

echo "54. Phone/fax mismatch"
grep -rn "7193000" app/mandatory-disclosures/ 2>/dev/null

echo "55. Outdated affiliation"
grep -rn "31.03.2025" app/mandatory-disclosures/ 2>/dev/null

echo "56. Fake link Mandatory"
grep -rn "<span>View</span>" app/mandatory-disclosures/ 2>/dev/null

echo "59-60. Terms and Conditions generic"
grep -rn "September 2026" app/terms-and-conditions/page.tsx 2>/dev/null

echo "61. Duplicated word in alt Contact"
grep -rn "School School" app/contact-us/page.tsx 2>/dev/null

echo "63. Placeholder ERP Login"
grep -rn "SMHS2026001" app/erp-login/page.tsx 2>/dev/null

echo "64. Autocomplete ERP Login"
grep -rn "current-password" app/erp-login/page.tsx 2>/dev/null

echo "66-67. Apple Touch and Manifest"
ls public/apple-touch-icon.png public/manifest.json 2>/dev/null
grep -rn "manifest" app/layout.tsx 2>/dev/null

