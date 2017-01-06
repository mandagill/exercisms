class Complement

	NUCLEOTIDES = ["G", "C", "T", "A"]

	def self.of_dna(dna_string)

		dna_string.upcase!
		dna_arr = dna_string.split("")
		rna_string = ""

		dna_arr.each do |nucleotide|
			if !Complement::NUCLEOTIDES.include?(nucleotide)
				return ""
			elsif nucleotide == "G"
				rna_string << "C"
			elsif nucleotide == "C"
				rna_string << "G"
			elsif nucleotide == "T"
				rna_string << "A"
			elsif nucleotide == "A"
				rna_string << "U"
			end
		end

		rna_string

	end
end