let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let totalJobsCount = document.getElementById('total-jobs');

const allCardsSection = document.getElementById('all-cards');
// console.log(allCardsSection.children.length);
const mainContainer = document.querySelector('main');
// console.log(mainContainer);
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

let interviewList = [];
let rejectedList = [];

function calculateCount(){
    totalCount.innerText = allCardsSection.children.length;
    totalJobsCount.innerText = allCardsSection.children.length;

    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculateCount();

function toggleStyle(id){
    // console.log('Clicked', id);
    
    // Remove bg-blue-400 from all the buttons
    allFilterBtn.classList.remove('bg-blue-400', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-400', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-400', 'text-white');

    // Add bg-white to all the buttons
    allFilterBtn.classList.add('bg-white', 'text-gray-500', 'border', 'border-gray-200');
    interviewFilterBtn.classList.add('bg-white', 'text-gray-500');
    rejectedFilterBtn.classList.add('bg-white', 'text-gray-500');

    // console.log(id);

    const selected = document.getElementById(id);
    // console.log(selected);

    // Remove bg-white first from the selected button then add the bg-blue-400
    selected.classList.remove('bg-white', 'text-gray-500');
    selected.classList.add('bg-blue-400', 'text-white');
}