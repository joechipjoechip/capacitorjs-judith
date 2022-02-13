<template>
    <div class="team-wrapper">
        <h1>PAGE TEAM </h1>

        <div class="team-container">

            <span v-for="mate in teammates" :key="mate.id">
                {{ mate }}
            </span>

        </div>
        
    </div>   
        

</template>

<script>
export default {
    layout: "mainLayout",
    data() {
        return {
            teammates : [
                {
                    nom:"Dupont",
                    prenom:"Jean",
                    discipline:"peintre"
                },
                {
                    nom:"Vidal",
                    prenom:"Pierre",
                    discipline:"chanteur"
                },
                {
                    nom:"Xin Yuh",
                    prenom:"Antoine",
                    discipline:"peintre"
                },
                {
                    nom:"Paul",
                    prenom:"Dupain",
                    discipline:"caligraphie"
                },
                {
                    nom:"Gilles",
                    prenom:"Dubain",
                    discipline:"chanteur"
                },
            ]
        }
    }
}
</script>

<style>

</style>