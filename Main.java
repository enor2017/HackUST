package com.company;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Calendar;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
public class Main {


    public static int getWeek(Date date){
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        int week_index = cal.get(Calendar.DAY_OF_WEEK) - 1 ;
        return week_index;
    }
    public static String getdate() {
        String date;
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        String str = dtf.format(now);
        date = str.substring(0,10);
        return date;
    }

        public static String gethour() {
            String hour;
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
            LocalDateTime now = LocalDateTime.now();
//            String str = dtf.format(now);
            String str = "2004/09/27 09:43:55";
            hour = str.substring(11,13);
            return hour;
        }
        public static String getminute() {
            String minute;
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
            LocalDateTime now = LocalDateTime.now();
//            String str = dtf.format(now);
            String str = "2004/09/27 09:43:55";
            minute = str.substring(14,16);
            return minute;
    }



    public static void main(String[] args) throws IOException {
        int date[][][] = new int[7][8][36];
        String people;
        String[] store_date = new String[10];
        int x = 0;
        int i = 0;
        int day = 0;
        String nowdate = "";
        String F = "";
        String D = "";
        //i is the number of the week
        for ( i = 0; i < 6; i++) {
            //day is the number represents Mon Tue Wed......
            for (day = 0; day < 7; day++) {
                String filename = i + "-" + day + ".txt";
                Path my_file = Paths.get(filename);
                if (Files.isReadable(my_file)) {
                    BufferedReader reader = Files.newBufferedReader(my_file, Charset.defaultCharset());
                    // Store the date, 1st line of the files
                    store_date[i] = reader.readLine();
                    String str;
                    x = 0;
                    while ((str = reader.readLine()) != null) {
//                        System.out.println(str);
                        int idx1 = str.indexOf(":");
                        int idx2 = str.indexOf(" ");
                        people = str.substring(idx2 + 1, str.length());
                        date[day][i][x] = Integer.parseInt(people);
                        x = x + 1;
                    }
                }
            }
        }
//        for(int a = 0; a < 7; a++){
//            for(int b = 0; b < 7; b++){
//                for(int c = 0; c < 36; c++){
//                    System.out.println(date[a][b][c]);
//                }
//            }
//        }

        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
        Date currentdate = new Date(System.currentTimeMillis());
        int weeknow = getWeek(currentdate);
        double forecast = 0;
        double coefficient = 0;
        int h = Integer.parseInt(gethour());
        int min = Integer.parseInt(getminute());
        for(int k = 0; k < 7; k++ ){
             coefficient = Math.pow(Math.E,7-k) + coefficient;
        }

        if((h < 8) || (h > 20)){
            System.out.println("canteen closed");
        }
        else {
            for (int y = 0; y < 6; y++) {
//                System.out.println(date[weeknow][y][(h - 8) * 3 + min / 20]);
                forecast = forecast + Math.pow(Math.E, 7 - y) * date[weeknow][y][(h - 8) * 3 + min / 20];
            }
            forecast = Math.floor(forecast / coefficient);
            System.out.println(forecast);
        }
        //file output
        String output_filename = h+"-"+(20*(min/20))+".txt";
                Path output_file = Paths.get(output_filename);
                try{
                    BufferedWriter writer = Files.newBufferedWriter(output_file,
                            Charset.defaultCharset());
                    for(int e = 0; e < 6; e++) {
                        writer.write(store_date[e]);
                        writer.write(" ");
                        D = String.valueOf(date[weeknow][e][(h - 8) * 3 + min / 20]);
                        writer.write(D);
                        writer.newLine();
                    }
                    nowdate = getdate();
                    writer.write(nowdate);
                    writer.write(" ");
                    F = String.valueOf(forecast);
                    writer.write(F);
                    writer.close();
                }catch(Exception e){
                    System.out.println("Error while writing file.");
                }

//
//
//            File rep = new File("path to rep");
//            File[] list = rep.listFiles();
//            ArrayList<String> filenames = new ArrayList<String>();
//            for (int k = 0; k < list.length; i++) {
//                filenames.add(list[i].getName());
//            }
//            for (int j = 0; j < list.length; j++) {
//                try {
//                    File myObj = new File("filenames[j]");
//                    Scanner myReader = new Scanner(System.in);
//                    while (myReader.hasNextLine()) {
//                        String str = myReader.nextLine();
//                        int idx1 = str.indexOf(":");
//                        int idx2 = str.indexOf(" ");
//                        hour = str.substring(0, idx1);
//                        minute = str.substring(idx1 + 1, idx2);
//                        people = str.substring(idx2 + 1, str.length());
//                        System.out.println(hour);
//                        System.out.println(minute);
//                        System.out.println(minute);
//                    }
//                    myReader.close();
//                } catch (Exception e) {
//                    System.out.println("An error occurred.");
//                    e.printStackTrace();
//                }
//            }
//                String output_filename="";
//                Path output_file = Paths.get(output_filename);
//                try{
//                    BufferedWriter writer = Files.newBufferedWriter(output_file,
//                            Charset.defaultCharset());
//                    writer.write(store_date);
//                    /* write other info */
//                    writer.close();
//                }catch(Exception e){
//                    System.out.println("Error while writing file.")
//                }
// GET DATE & TIME IN ANY FORMAT

//    public static final String string = "yyyy-MM-dd HH:mm:ss";
//    public static String now() {
//        Calendar cal = Calendar.getInstance();
//        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
//        LocalDateTime now = LocalDateTime.now();
//        System.out.println(dtf.format(now));
//        return dtf.format(now);
//    }
//    public static int determinedate(String currentdate){
//        currentdate
//    }
}
}







