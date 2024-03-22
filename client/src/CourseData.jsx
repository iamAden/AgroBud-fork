import pestmanagement from "./assets/pestmanagement.jpg";
import precisionagriculture from "./assets/precisionagriculture.jpg";
import soil from "./assets/soil.jpg";

const courseData = [
{
    id: 1,
    title: 'Harmful Pests',
    imageSrc: pestmanagement,
    tags: ['Beginner', 'Free', 'Pest Management'],
    status: 'Not enrolled',
    length: '12 hours',
    progress: 0,
    description: 'This course introduces learners to the world of Harmful Pests, covering essential concepts in pest management. Suitable for beginners, it offers a comprehensive understanding of pest control strategies over a course of 12 hours. With a focus on practical applications, students gain insights into identifying, preventing, and managing pest infestations effectively.',
    chapters: [
        {id:1,title:'Chapter 1: Introduction to Harmful Pests'}, 
        {id:2,title:'Chapter 2: Types of Harmful Pests'}, 
        {id:3, title:'Chapter 3: Identifying Pest Infestations'},
        {id:4, title:'Chapter 4: Common Pest Control Methods'},
        {id:5, title:'Chapter 5: Integrated Pest Management (IPM)'},
        {id:6, title:'Chapter 6: Pesticides and Their Application'}]
},
{
    id: 15,
    title:"AI with Agriculture",
    imageSrc: precisionagriculture,
    tags: ["Intermediate", "Free", "ICT in farming"],
    status: "Enrolled",
    length:"6 hours",
    progress:50,
    description: 'This course explores the integration of artificial intelligence (AI) technologies in agriculture to enhance efficiency, productivity, and sustainability. Participants will learn how AI applications can revolutionize various aspects of agricultural practices, including crop management, livestock monitoring, precision agriculture, and supply chain optimization. Through practical examples and case studies, students will gain insights into the implementation of AI algorithms and tools to address real-world challenges in the agricultural sector.',
    chapters: [
        {id:1, title:'Chapter 1: Introduction to AI in Agriculture'},
        {id:2, title:'Chapter 2: Data Collection and Preprocessing for AI Applications'},
        {id:3, title:'Chapter 3: Machine Learning Algorithms for Crop Management'},
        {id:4, title:'Chapter 4: AI Applications in Precision Agriculture'},
        {id:5, title:'Chapter 5: Livestock Monitoring and Health Management with AI'},
        {id:6, title:'Chapter 6: Ethical and Social Implications of AI in Agriculture'}],
    
},
];

export default courseData;