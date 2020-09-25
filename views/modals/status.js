import Start from '/views/pages/Start.js'
import Leaders from '/views/pages/Leaders.js';

let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <h5><div id="status_links"></div>
        <div><span id="current_user"></span> <span id="api_status"></span> <span id="status_text_points"></span></div>
        <span id="status-loading-item">
        <span class="loading one">.</span><span class="loading two">.</span>
        <span class="loading three">.</span></span></h5>
        `
        return view
    },
    after_render: async () => {
        let d = `<span>`+`[<a data-micromodal-trigger="modal" id="status_about">help</a>]`+`</span>  
        <span>`+`[<a data-micromodal-trigger="modal" id="status_leaders">leaderboard</a>]`+`</span>`
        document.getElementById('status_links').innerHTML = d;
        document.getElementById('status-loading-item').classList.add('hidden');
        let h = await Help.render();
        let l = await Leaders.render();
        document.getElementById('status_about').addEventListener('click', function(){
            ctf.modal.set("Help",h,"").then(function(){
                // override modal layout
                document.getElementById('modal-content').classList.add('ctf-block');
                Help.after_render();
            })
        });
        document.getElementById('status_leaders').addEventListener('click', function(){
            ctf.modal.set("Leaderboard",l,"").then(function(){
                // override modal layout
                document.getElementById('modal-content').classList.add('ctf-block');
                Leaders.after_render("scrub");
            })
        });
        document.getElementById('status_text_points').innerHTML = '<span id="status_points">'+String(ctf.state.CTF.points)+'</span> Points';
    }
}

let Help = {
    render: async () => {
        let c_list = await Start.info_entries();
        let h_list = ``;
        for (let i=0; i<c_list.length; i++ ) {
            h_list = h_list + '<section><a id="'+c_list[i].id+'">'+c_list[i].title+'</a></section>';
            h_list = h_list + '<section><span class="status_help_item hidden" id="status_help_item_'+c_list[i].id+'">'+c_list[i].body+'</span></section>'
            //'div>'+c_list[i].body+'</div><hr width="70%" class="ctf-hr" />'
            if(i != c_list.length-1) {
                h_list = h_list + '<hr width="70%" class="ctf-hr" />';
            }
        }
        return h_list;
    },
    after_render: async () => {
        let c_list = await Start.info_entries();
        for (let i=0; i<c_list.length; i++ ) {
            document.getElementById(c_list[i].id).addEventListener('click', function(){
                let d = document.getElementById('status_help_item_'+c_list[i].id)
                // Either hide or unhide element
                if (d.classList.contains("hidden")) {
                    d.classList.remove('hidden');
                } else {
                    d.classList.add('hidden');
                }
            });
        }
        // document.getElementById(c_list[i].id).classList.add('ctf-block');
    }
}


export default Bottombar;