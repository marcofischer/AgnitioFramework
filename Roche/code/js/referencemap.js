
document.addEventListener('presentationInit',function(){
  
  /*
   * This is a list of all the references in the presentation.
   * These are used below in the referencemap to display the correct refs.
   */
  var reflist = {
    Aenean_2004:  {
      title: "Aenean 2004",
      pdf: "content/pdf/Aenean-2004.pdf",
      link: ""
    },

    Lorem_2010:  {
      title: "Lorem 2010",
      pdf: "content/pdf/Lorem-2010.pdf",
      link: ""
    },

    Nullam_1996:  {
      title: "Nullam 1996",
      pdf: "content/pdf/Nullam-1996.pdf",
      link: ""
    },

    Nullam_2008:  {
      title: "Nullam 2008",
      pdf: "content/pdf/Nullam-2008.pdf",
      link: ""
    }
  };

  /*
   * The reference map attaches references to an object, which can be paired with slides, popups, etc.
   * A list of slides and which references they contain in the following format:
   * DOM_ID: ["Reference_ID_1", "Reference_ID_2", "Etcetera"]
   */
  
  app.referencemap = {
    burping_effect:           [reflist.Nullam_2008, reflist.Aenean_2004],
    summary:                  [reflist.Aenean_2004, reflist.Lorem_2010, reflist.Nullam_2008, reflist.Nullam_1996],
    unique_mechanism_video:   [reflist.Lorem_2010],
    treatment_adherence:      [reflist.Aenean_2004, reflist.Lorem_2010, reflist.Nullam_2008],
    pain_therapy:             [reflist.Lorem_2010, reflist.Nullam_1996]
  };

})