import React from 'react'

function Information() {
  return (
    <>
    <div>
    <h1 className="font-semibold text-2xl pb-2 underline text-center">Research Journals</h1>
    <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="http://192.168.2.13:8069/web/image/638-753b8e88/ALIS.png"
      className="w-40 h-30" />
    <div>
      <h1 className="text-xl font-bold underline">Annals of Library and Information Studies (ALIS)</h1>
      <p className="py-6">
      Annals of Library and Information Studies is the leading and the oldest English language quarterly LIS journal from India that publishes original papers, survey reports, reviews, short communications, and letters pertaining to library and information science. In the year 1954, erstwhile INSDOC launched  Annals of Library Science  as its first publication and Dr. S R Ranganathan was its first Editor.  The journal’s title was expanded to  Annals of Library Science and Documentation  in 1964 and again renamed in 2001 as  Annals of Library and Information Studies . Into its 69th volume in 2022,  Annals of Library and Information Studies  is the oldest English language LIS Indian journal..  CSIR-NIScPR does not levy Article Processing Charges (APCs) or Article Submission Charges.
      </p>
      <button className="btn btn-primary">Buy Now!</button>
    </div>
  </div>
</div>
<div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="http://192.168.2.13:8069/web/image/640-f6fa246d/BVAAP.png"
      className="w-40 h-30" />
    <div>
      <h1 className="text-xl font-bold underline">Bharatiya Vaigyanik evam Audyogik Anusandhan Patrika (BVAAP)</h1>
      <p className="py-6">
      On persistent demands from many quarters, NISCAIR started a Hindi Journal, Bharatiya Vaigyanik evam Audyogik Anusandhan Patrika. The first issue of this new journal came out in June 1993. The journal publishes original and review articles in various disciplines of science such as chemistry, physics, botany, zoology, biochemistry, biophysics, geology, marine science, etc. along with various areas of engineering and technology. Articles in fields like biotechnology, pollution control, alternative sources of energy, science and society, information science, etc. are also considered for publication.
      </p>
      <button className="btn btn-primary">Buy Now!</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Information
