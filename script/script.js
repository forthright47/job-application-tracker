let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let totalJobsCount = document.getElementById('total-jobs');

let currentStatus = 'all';

const allCardsSection = document.getElementById('all-cards');
// console.log(allCardsSection.children.length);
const mainContainer = document.querySelector('main');
// console.log(mainContainer);
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const filteredSection = document.getElementById('filtered-section');

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
    currentStatus = id;

    // Remove bg-white first from the selected button then add the bg-blue-400
    selected.classList.remove('bg-white', 'text-gray-500');
    selected.classList.add('bg-blue-400', 'text-white');

    if(id == 'interview-filter-btn'){
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    }
    else if(id == 'all-filter-btn'){
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
    else if(id == 'rejected-filter-btn'){
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
}

mainContainer.addEventListener('click', function(event){
    // console.log(event.target.parentNode.parentNode);
    // console.log(event.target.classList.contains('interview-btn'));
    

    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;

        const jobName = parentNode.querySelector('.job-name').innerText;
        // console.log(jobName);
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobType= parentNode.querySelector('.job-type').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        // Change the status
        parentNode.querySelector('.status').innerText = "INTERVIEW";

        // console.log(jobName, jobTitle, jobType, status, notes);
        const cardInfo = {
            jobName,
            jobTitle,
            jobType,
            status: 'INTERVIEW',
            notes
        }
        // console.log(cardInfo);

        const jobExist = interviewList.find(item=> item.jobName == cardInfo.jobName);

        if(!jobExist){
            interviewList.push(cardInfo);
        }
        // console.log(interviewList);

        rejectedList = rejectedList.filter(item=> item.jobName != cardInfo.jobName);

        calculateCount();
        if(currentStatus == 'rejected-filter-btn'){
            renderRejected();
        }
    }

    else if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;

        const jobName = parentNode.querySelector('.job-name').innerText;
        // console.log(jobName);
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobType= parentNode.querySelector('.job-type').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        // Change the status
        parentNode.querySelector('.status').innerText = "REJECTED";

        // console.log(jobName, jobTitle, jobType, status, notes);
        const cardInfo = {
            jobName,
            jobTitle,
            jobType,
            status: 'REJECTED',
            notes
        }
        // console.log(cardInfo);

        const jobExist = rejectedList.find(item=> item.jobName == cardInfo.jobName);

        if(!jobExist){
            rejectedList.push(cardInfo);
        }
        // console.log(interviewList);

        interviewList = interviewList.filter(item=> item.jobName != cardInfo.jobName);

        if(currentStatus == 'interview-filter-btn'){
            renderInterview();
        }

        calculateCount();
    }
})

function renderInterview(){
    filteredSection.innerHTML = '';

    for(let interview of interviewList){
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card flex justify-between bg-white border border-gray-200 rounded-lg p-6 my-6';
        div.innerHTML = `
        <div class="space-y-3">
            <h4 class="job-name text-[#002C5C] text-xl font-semibold">${interview.jobName}</h4>
            <p class="job-title text-[#64748B]">${interview.jobTitle}</p>
            <p class="job-type text-[#64748B] mb-5">${interview.jobType}</p>
            <button class="status bg-blue-100 border border-blue-100 text-[#002C5C] px-5 py-2 rounded-lg">${interview.status}</button>
            <p class="notes mt-1.5 text-[#323B49]/80 text-sm">${interview.notes}</œp>
            <div class="flex gap-3">
                <button class="interview-btn bg-white border border-green-500 text-green-500 font-semibold px-5 py-2 rounded-lg">INTERVIEW</button>
                <button class="rejected-btn bg-white border border-red-500 text-red-500 font-semibold px-5 py-2 rounded-lg">REJECTED</button>
            </div>
        </div>
        <div>
            <button class="btn-delete bg-white border border-red-500 text-red-500 font-semibold px-5 py-2 rounded-lg">Delete</button>
        </div>
        `
        filteredSection.appendChild(div);
    }
}

function renderRejected(){
    filteredSection.innerHTML = '';

    for(let rejected of rejectedList){
        console.log(rejected);

        let div = document.createElement('div');
        div.className = 'card flex justify-between bg-white border border-gray-200 rounded-lg p-6 my-6';
        div.innerHTML = `
        <div class="space-y-3">
            <h4 class="job-name text-[#002C5C] text-xl font-semibold">${rejected.jobName}</h4>
            <p class="job-title text-[#64748B]">${rejected.jobTitle}</p>
            <p class="job-type text-[#64748B] mb-5">${rejected.jobType}</p>
            <button class="status bg-blue-100 border border-blue-100 text-[#002C5C] px-5 py-2 rounded-lg">${rejected.status}</button>
            <p class="notes mt-1.5 text-[#323B49]/80 text-sm">${rejected.notes}</œp>
            <div class="flex gap-3">
                <button class="interview-btn bg-white border border-green-500 text-green-500 font-semibold px-5 py-2 rounded-lg">INTERVIEW</button>
                <button class="rejected-btn bg-white border border-red-500 text-red-500 font-semibold px-5 py-2 rounded-lg">REJECTED</button>
            </div>
        </div>
        <div>
            <button class="btn-delete bg-white border border-red-500 text-red-500 font-semibold px-5 py-2 rounded-lg">Delete</button>
        </div>
        `
        filteredSection.appendChild(div);
    }
}